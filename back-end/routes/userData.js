const express = require('express');
const userData = express.Router();
const UserSchema = require('../models/userSchema');
const jwt = require("jsonwebtoken")
const cookieParser = require('cookie-parser');

const JWT_SECRET = "hgdbcfdjkhlkgxsed()xcghfjmdgf6534hfc764fu7gjgd8?mdgdf"
userData.use(cookieParser());

userData.post('/userData', async (req, res) => {
    const token = req.cookies.token || '';
    try {
        const decoded = jwt.verify(token, JWT_SECRET, { ignoreExpiration: false }); // set ignoreExpiration option to false
        const userName = decoded.username;
        UserSchema.findOne({ username: userName }).then((data) => {
          res.send({ status: 'ok', data });
        }).catch((error) => {
          res.send({ status: 'error', data: error });
        });
      } catch (error) {
        if (error.name === 'TokenExpiredError') {
          res.clearCookie('token'); // clear the expired token
          console.log('Token expired');
          return res.redirect('/Form'); // redirect to /Form
        } else {
          res.status(401).send({ status: 'error', message: 'Authentication failed.' });
        }
      }
});
module.exports = userData;