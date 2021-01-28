const mongoose = require("mongoose");

const blogSchema = mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "SignUp",
  },
  blogTitle: {
    type: String,
    required: true,
  },
  blogSubTitle: {
    type: String,
    required: true,
  },
  blogDescription: {
    type: String,
    required: true,
  },
  blogPhoto: {
    type: String,
    required: true,
  },
  blogTime: {
    type: String,
    required: true,
  },
});

const UserBlogSchema = mongoose.model("userBlogData", blogSchema);

module.exports = UserBlogSchema;
