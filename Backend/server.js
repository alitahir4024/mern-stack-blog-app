const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const asyncHandler = require("express-async-handler");
const SignupModal = require("./models/signupModal.js");
const bcrypt = require("bcryptjs");
const UserBlogModal = require("./models/blogModal.js");
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
require("dotenv").config();
const PORT = process.env.PORT || 9999;
const router = express.Router();
const path = require("path");

const connectDB = async () => {
  try {
    const DbConnection = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log(`DB connected on host ${DbConnection.connection.host}`);
  } catch (error) {
    console.log(`error ${error.message}`);
  }
};

connectDB();

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

app.use("/api", router);

// serve static assets if in production

if (process.env.NODE_ENV === "PRODUCTION") {
  app.use(express.static("Frontend/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "Frontend", "build", "index.html"));
  });
}

app.listen(PORT, () => {
  console.log(
    `server is running in ${process.env.NODE_ENV} mode at port ${PORT}`
  );
});
