//import "../models/User";
//import User from "../models/User";
const express = new require("express");
const User = new require("../models/User");
const router = express.Router();

router.post("/", async (req, res) => {
    try {
        let user = new User(req.body);
        user = await user.save();
        res.status(200).json({
            status: 200,
            data: user,
        });
    } catch (err) {
        res.status(400).json({
            status: 400,
            message: err.message,
        });
    }
});

router.get("/list", async (req, res) => {
    try {
      let user = await User.find();
      res.status(200).json({
        status: 200,
        data: user,
      });
    } catch (err) {
      res.status(400).json({
        status: 400,
        message: err.message,
      });
    }
});

router.get("/:userId", async (req, res) => {
    try {
      let user = await User.findOne({
        _id: user.params.userId,
      });
      if (post) {
        res.status(200).json({
          status: 200,
          data: user,
        });
      }
      res.status(400).json({
        status: 400,
        message: "No post found",
      });
    } catch (err) {
      res.status(400).json({
        status: 400,
        message: err.message,
      });
    }
});
  
router.put("/:userId", async (req, res) => {
    try {
      let user = await User.findByIdAndUpdate(req.params.userId, req.body, {
        new: true,
      });
      if (user) {
        res.status(200).json({
          status: 200,
          data: user,
        });
      }
      res.status(400).json({
        status: 400,
        message: "No post found",
      });
    } catch (err) {
      res.status(400).json({
        status: 400,
        message: err.message,
      });
    }
});
  
router.delete("/:userId", async (req, res) => {
    try {
      let user = await User.findByIdAndRemove(req.params.userId);
      if (user) {
        res.status(200).json({
          status: 200,
          message: "Post deleted successfully",
        });
      } else {
        res.status(400).json({
          status: 400,
          message: "No post found",
        });
      }
    } catch (err) {
      res.status(400).json({
        status: 400,
        message: err.message,
      });
    }
});

module.exports = router;