const express = require('express')
const adminSignIn = express.Router()
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const AdminSchema = require('../models/adminSchema')

const JWT_SECRET = "hgdbcfdjkhlkgxsed()xcghfjmdgf6534hfc764fu7gjgd8?mdgdf"
adminSignIn.post('/adminSignIn', async (req, res) => {
    const { username,password } = req.body;
    console.log(req.body);
    const user = await AdminSchema.findOne({ username: username });
    if (user) {
      const isCorrect = await bcrypt.compare(password,user.password);
      if (isCorrect) {
        const token = jwt.sign({ username: user.username }, JWT_SECRET, { expiresIn: '5m' }); // set token to expire after 5 minutes
        console.log(token);
        res.cookie('token', token, { httpOnly: true, sameSite: 'strict' }); // Set cookie
        res.status(201).json({ isVerified: true, message: 'Login successful.' });
      } else {
        res.json({ isVerified: false, message: 'Incorrect Password! .' });
      }
    } else {
      res.json({ isVerified: false, message: 'Admin does not exist' });
    }
  });

  module.exports = adminSignIn;