const express = require('express')
const createAdmin = express.Router()
const AdminSchema = require('../models/adminSchema')
const bcrypt = require("bcryptjs")

createAdmin.post('/createAdmin', async (req, res) => {
    const {fullName, phoneNumber, username,password} = req.body;
    console.log(req.body);
    try {
        let user = await AdminSchema.findOne({
            username:username
        })
        if(user){
            throw new Error("User already exist");
        }
        console.log("reached here");
        const encryptPassword = await bcrypt.hash(password, 10);
        console.log('Encrypted Password:', encryptPassword);
    
        user = new AdminSchema({
            fullName:fullName,
            phoneNumber:phoneNumber,
            username:username,
            password:encryptPassword
        })
        console.log(user);
        await user.save();
        return res.status(200).send({
            message:'Registered successfully.'}) 
        
    } catch (err) {
        return res.status(201).send({
            message:`Failed to register. ${err.message}`}) 
    }
})

module.exports = createAdmin;