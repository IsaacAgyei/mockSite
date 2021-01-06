const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const JwtStrategy = require('passport-jwt').Strategy
const User = require('./models/user.model')
require('dotenv').config()


const cookieExtractor = req =>{
  let token = null;
  if(req && req.cookies){
      token = req.cookies["access_token"];
  }
  return token;
}

// used for autherization to protect protected/private endpoints
passport.use(new JwtStrategy({
  jwtFromRequest: cookieExtractor,
  secretOrKey: process.env.JWT_SECRET
}, (payload, done) => {
  User.findOne({_id: payload.sub}, (err, user) => {
    if(err)
      return done(err, false) // error and the user doesn't exist in the database
    if(user)
      return done(null, user) // no error and user does exist in the database
    else
      return done(null, false) // no error and no user exists in the database
  })
}))

// authentication local strategy username and password, used for logging in
passport.use(new LocalStrategy((username, password, done) => {
  //check if user exists
  User.findOne({username}, (err, user) => {
    //error occured in the database
    if(err)
      return done(err)

    //if no user exists
    if(!user)
      return done(null, false)
    
    // Check the './models/User' to locate the comparePassword function. Notice the param "cb" is the "done" param now
    user.comparePassword(password, done) //check if password is correct
  })
}))