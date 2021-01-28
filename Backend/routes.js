const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");
const SignupModal = require("./models/signupModal.js");
const bcrypt = require("bcryptjs");
const UserBlogModal = require("./models/blogModal.js");

router.post(
  "/signup",
  asyncHandler(async (req, res) => {
    try {
      // old way of password hashing
      // const salt = await bcrypt.genSalt();
      // const hashedPassword = await bcrypt.hash(userPassword, salt);

      const { username, userEmailAddress, userPassword } = req.body;
      // new way
      const hashedPassword = await bcrypt.hash(userPassword, 10);
      await SignupModal.insertMany({
        username,
        userEmailAddress,
        hashedPassword,
      });
      res.send("Sign In Successful");
    } catch {
      res.send("Sign In unsuccessful please try again");
    }
  })
);

router.post(
  "/login",
  asyncHandler(async (req, res) => {
    const data = await SignupModal.findOne({
      userEmailAddress: req.body.userEmailAddress,
    });
    try {
      if (await bcrypt.compare(req.body.userPassword, data.hashedPassword)) {
        res.send(data);
      }
    } catch {
      res.send("Login unsuccessful");
    }
  })
);

router.post(
  "/userBlogs/:id",
  asyncHandler(async (req, res) => {
    try {
      const userBlogData = await req.body.map((userBlog) => {
        return { ...userBlog, userId: req.params.id };
      });
      await UserBlogModal.insertMany(userBlogData);
      res.send("Blog Added");
    } catch {
      res.send("Blog is not added");
    }
  })
);

router.get(
  "/userBlogs",
  asyncHandler(async (req, res) => {
    await UserBlogModal.find().then((data) => {
      res.send(data);
    });
  })
);

router.post(
  "/userBlogs/deleteBlog/:id",
  asyncHandler(async (req, res) => {
    try {
      await UserBlogModal.findByIdAndDelete(req.params.id);
      res.send("Blog Deleted Successfully");
    } catch {
      res.send("Blog is not deleted");
    }
  })
);

module.exports = router;
