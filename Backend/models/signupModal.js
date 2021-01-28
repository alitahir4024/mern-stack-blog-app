const mongoose = require("mongoose");

const signupSchema = mongoose.Schema({
  username: {
    required: true,
    type: String,
    unique: true,
  },
  userEmailAddress: {
    required: true,
    type: String,
    unique: true,
  },
  hashedPassword: {
    required: true,
    type: String,
  },
});

const SignupModal = mongoose.model("SignUp", signupSchema);

module.exports = SignupModal;
