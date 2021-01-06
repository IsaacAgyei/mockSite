const express = require('express')
const userRouter = express.Router()
const passport = require('passport')
const passportConfig = require('../passport')
const User = require('../models/user.model')
const JWT = require('jsonwebtoken')
const multer = require('multer');
const bcrypt = require('bcryptjs')
const crypto = require('crypto');
const path = require('path')
const { Storage } = require('@google-cloud/storage');
const Nylas = require('nylas');
const sgMail = require('@sendgrid/mail')

const dotenv = require('dotenv');
dotenv.config({path: path.resolve(__dirname, process.env.ENV_PATH)})
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

/* ---------------------- SENDGRID Email System Setup + EMAIL DRAFT -------------------- */

userRouter.post('/forgotPassword', (req, res) => {
  if (req.body.email === '') {
    res.status(400).send('email required')
  }
  console.log(`req.body.email: ${req.body}`)
  User.findOne( { email: req.body.email } )
  .then((user) => {
    if(user === null) {
      console.error('email not in database')
      res.status(403).send('email not in db')
    } else {
      const token = crypto.randomBytes(20).toString('hex')
      user.updateOne({ resetPasswordToken: token, resetPasswordExpires: Date.now() + 3600000}, (error, data) => {
        if(error) {
          console.log(`error: ${error}`)
        } else {
          console.log(`data: ${data}`)
        }
      })

      const msg = {
        to: [{ name: `${user.username}`, email: `${user.email}` }], // Change to your recipient
        from: 'elijaho@ecaccountants.com' , // Change to your verified sender
        subject: 'Link To Reset Password For Your Sardius Accounting Client Profile',
        text: 'You are receiving this because (or someone else) has requested the rest of the password for you account. \n\n'
                + 'Please click on the following link, or paste the url into your brower to complete the process. The link will expire in 1 hour upon receiving this email: \n\n'
                + `http://localhost:3000/reset/${token}\n\n`
                + 'If you did not request a password reset, please ignore this email and your password will remain unchanged.',
      }

      sgMail
        .send(msg)
        .then(() => {
          console.log('Email sent')
          res.status(200).json('recovery email sent')
        })
        .catch((error) => {
          console.error(error)
        })
    }
  })
})


/* ---------------------- FORGOT + RESET PASSWORD -------------------- */

userRouter.get('/reset', (req, res, next) => {
  User.findOne({
      resetPasswordToken: req.query.resetPasswordToken,
      resetPasswordExpires: { $gt: Date.now(),}
    })
    .then(user => {
    if(user == null) {
      console.error('password reset link is invalid or has expired');
      res.status(403).send('password reset link is invalid or has expired');
    } else {
      res.status(200).send({
        username: user.username,
        message: 'password reset link a-ok',
      });
    }
  })
})

userRouter.put('/updatePasswordViaEmail', (req, res) => {
  const BCRYPT_SALT_ROUNDS = 12;
  console.log(`req: ${req.body.username}`)

  User.findOne({
      username: req.body.username,
      resetPasswordToken: req.body.resetPasswordToken,
      resetPasswordExpires: { $gt: Date.now(),},
  })
  .then(user => {
    if (user == null) {
      console.error('password reset link is invalid or has expired');
      res.status(403).send('password reset link is invalid or has expired');
    } else if (user != null) {
      console.log('user exists in db');
      bcrypt
        .hash(req.body.password, BCRYPT_SALT_ROUNDS)
        .then(hashedPassword => {
          console.log(`hashed pass: ${hashedPassword}`)
          user.updateOne({ password: hashedPassword}, (error, data) => {
            if(error) {
              console.log(`error: ${error}`)
            } else {
              console.log(`data: ${data}`)
            }
          })
        })
        .then(() => {
          console.log('password updated');
          console.log(`user:  ${user}`)
          res.status(200).send({ message: 'password updated' });
        });
    } else {
      console.error('no user exists in db to update');
      res.status(401).json('no user exists in db to update');
    }
  });
});



/* ---------------------- FIREBASE FILE STORAGE SET UP   -------------------- */

// Create new storage instance with Firebase project credentials
const storage = new Storage({
  projectId: process.env.GCLOUD_PROJECT_ID,
  keyFilename: process.env.GCLOUD_APPLICATION_CREDENTIALS,
});

// Create a bucket associated to Firebase storage bucket
const bucket = storage.bucket(process.env.GCLOUD_STORAGE_BUCKET_URL);

// Initiating a memory storage engine to store files as Buffer objects
const uploader = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024, // limiting files size to 5 MB
  },
});

userRouter.post('/api/upload', uploader.single('clientfile'), async (req, res, next) => {
  try {
    if (!req.file) {
      res.status(400).send('Error, could not upload file');
      return;
    }

    // Create new blob in the bucket referencing the file
    const blob = bucket.file(req.file.originalname);

    // Create writable stream and specifying file mimetype
    const blobWriter = blob.createWriteStream({
      metadata: {
        contentType: req.file.mimetype,
      },
    });

    blobWriter.on('error', (err) => next(err));

    blobWriter.on('finish', () => {
      // Assembling public URL for accessing the file via HTTP
      const publicUrl = `https://firebasestorage.googleapis.com/v0/b/${
        bucket.name
      }/o/${encodeURI(blob.name)}?alt=media`;

      // Return the file name and its public URL
      res
        .status(200)
        .send({ fileName: req.file.originalname, fileLocation: publicUrl });
    });

    // When there is no more data to be consumed from the stream
    blobWriter.end(req.file.buffer);
  } catch (error) {
    res.status(400).send(`Error, could not upload file: ${error}`);
    return;
  }
});



/* ---------------------- JWT AUTHERIZATION  -------------------- */

const signToken = userID => {
  return JWT.sign({
    iss: process.env.JWT_SECRET,
    sub: userID // primary key of the user
  },process.env.JWT_SECRET, {expiresIn: '1h'} )
}

userRouter.post('/register', (req, res) => {
  const { username, password, email } = req.body // Clients must have unique usernames
  User.findOne({username}, (err, user)=> {
    if(err)
      res.status(500).json({message: {msgBody: `Error has occured`, msgError: true}})
    if(user)
      res.status(500).json({message: {msgBody: 'Username is already taken', msgError: true}})
    else{
      const newUser = new User({username, password, email})
      newUser.save(err=> {
        if(err)
          res.status(500).json({message: {msgBody: 'Error has occured', msgError: true}})
        else
          res.status(201).json({message: {msgBody: 'Account successfully created', msgError: false}})
      })
    }
  })
})

userRouter.post('/login', passport.authenticate('local', {session: false}), (req, res) => {
  if(req.isAuthenticated()) {
    const {_id, username, email} = req.user;
    const token = signToken(_id)
    res.cookie('access_token', token, {httpOnly: true, sameSite: true})
    res.status(200).json({isAuthenticated: true, user: {username, email}})
  }
})

userRouter.get('/logout',passport.authenticate('jwt',{session : false}),(req,res)=>{
  res.clearCookie('access_token');
  res.json({user:{username : "", role : ""},success : true});
});

userRouter.get('/authenticated',passport.authenticate('jwt',{session : false}),(req,res)=>{
  const {username,role} = req.user;
  res.status(200).json({isAuthenticated : true, user : {username,role}});
});



module.exports = userRouter