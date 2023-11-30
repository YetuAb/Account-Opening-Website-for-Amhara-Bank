const express = require('express')
const getAllUser = express.Router()
const UserSchema = require('../models/userSchema')

getAllUser.get("/getAllUser", async (req, res) => {
    try {
      const allUser = await UserSchema.find({});
      res.send({ status: "ok", data: allUser });
    } catch (error) {
      console.log(error);
    }
  });

  module.exports = getAllUser;