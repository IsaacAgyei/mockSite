const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const UserSchema = new mongoose.Schema({

  username: {
    type: String,
    min: 6,
    max: 15,
   required: true,
  },

  password: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  resetPasswordToken: {
    type: String,
  },
  
  resetPasswordExpires:{
    type: Date,
  }
})

// Will hash the passwor before its saved, assuming the user is new as has a plain text password
UserSchema.pre('save', function(next){
  if (!this.isModified('password')) {
    return next()
  }
  bcrypt.hash(this.password, 10, (err, passwordHash) => {
    if(err)
      return next(err)
    this.password = passwordHash
    next()
  })
})

UserSchema.methods.comparePassword = function(password, cb) {
  bcrypt.compare(password, this.password, (err, isMatch)=> {
    if(err)
      return cb(err)
    else{
      if(!isMatch)
        return cb(null, isMatch)
      return cb(null, this)
    }
  })
}

module.exports = mongoose.model('User', UserSchema)