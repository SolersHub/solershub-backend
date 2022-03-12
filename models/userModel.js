const mongoose = require("mongoose");
const emailVal = require("email-validator");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Every user must have a name!"],
  },
  email: {
    type: String,
    required: [true, "Every user must have an email address!"],
    unique: [true, "Email already in use by another user!"],
    validate: {
      validator: emailVal.validate,
    },
  },
  password: {
    type: String,
    required: [true, "Every user must have a password!"],
  },
  courses: [
    {
      type: Object,
    },
  ],
  image: {
    type: String,
  },
  verified: {
    type: Boolean,
    default: false,
  },
  verifyHash: String,
  passwordResetExpires: Date,
  passwordChangeDate: Date,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
