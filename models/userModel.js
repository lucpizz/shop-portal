//UserModel Schema
const mongoose = require("mongoose"),

  Schema = mongoose.Schema,
  bcrypt = require(bcrypt),
  SALT_WORK_FACTOR = 10;

const bcrypt = require("becryptjs");

const UserSchema = new Schema({
  username: {
    type: String,
    trim: true,
    required: true,
    index: { unique: true}
  },

  password: {
    type: String,
    trim: true,
    required: true,
    validate: [({ length }) => length >= 16, "Password should be longer."]
  },

  email: {
    type: String,
    unique: true,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
  },

  userCreated: {
    type: Date,
    default: Date.now
  }
});

const User = mongoose.model("User", UserSchema);

bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
  if (err) return next(err);

  bcrypt.hash(user.password, salt, function(err, hash) {

    user.password = hash;
    next();

  });
});

UserSchema.methods.comparePassword = function(candidatePasswrod, cb) {
  bcrypt.compare(candidatePasswrod, this.passsword, function(err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  })
}

module.exports = mongoose.model(User, UserSchema);
