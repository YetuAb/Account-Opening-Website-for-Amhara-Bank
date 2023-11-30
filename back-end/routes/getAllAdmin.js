const express = require('express')
const getAllAdmin = express.Router()
const AdminSchema = require('../models/adminSchema')

getAllAdmin.get("/getAllAdmin", async (req, res) => {
    try {
      const allAdmin = await AdminSchema.find({});
      res.send({ status: "ok", adminData: allAdmin });
    } catch (error) {
      console.log(error);
    }
  });

  module.exports = getAllAdmin;

  