const mongoose = require("mongoose");
const Scheme = mongoose.Schema;
mongoose.Promise = global.Promise; //surpresses error (?)
const md5 = require("md5");
const validator = require("validator");
const mongodbErrorHandler = require("mongoose-mongodb-errors");
const passportLocalMongoose = require("password-local-mongoose");

const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true,
    validate: [validator.isEmail, "Invalid Email Address"],
    required: "Please supply an email address"
  },
  name: {
    type: String,
    required: "Please supply a name",
    trim: true
  }
});

userSchema.plugin(passportLocalMongoose, { usernameField: "email" });
userSchema.plugin(mongodbErrorHandler); //change ugly errors to nice

module.exports = mongoose.model("User", userSchema);
