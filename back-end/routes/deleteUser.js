const express = require('express')
const deleteUser = express.Router()
const UserSchema = require('../models/userSchema')

deleteUser.post("/deleteUser", async (req, res) => {
    const { idNo } = req.body;
    try {
      await UserSchema.deleteOne({ idNo: idNo });
      res.send({ status: "Ok", data: "Deleted" });
    } catch (error) {
      console.log(error);
      res.send({ status: "Error", data: "Deletion failed" });
    }
  });
  module.exports = deleteUser;