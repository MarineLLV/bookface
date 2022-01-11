// import express
const express = require('express');

// create the router
const router = express.Router();

// require the models
const UserModel = require('../models/UserModel');
const FollowerModel = require('../models/FollowerModel');

// need jwt + bcrypt for password
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// for email validation
const isEmail = require('validator/lib/isEmail');
const { sendStatusCode } = require('next/dist/server/api-utils');


// 1. POST request 
router.post('/', async (req, res) => {
    const { email, password } = req.body.user;

    // check email 
    if (!isEmail(email)) return res.status(401).send('Invalid email')

    // check password length
    if (password.length < 6) return res.status(401).send('Password must be at least 6 characters');

    try {
        // find if there is any user with this email
        const user = await UserModel.findOne({ email: email.toLowerCase() }).select('+password'); // because select:false in the model
        if (!user) {
            return res.status(401).send('Invalid Credentials');
        }

        const isPassword = await bcrypt.compare(password, user.password)
        if (!isPassword) {
            return res.status(401).send('Invalid Credentials');
        }


        // send back the token to the frontend
        const payload = { userId: user._id };
        jwt.sign(payload, process.env.jwtSecret, { expiresIn: "2d" }, (error, token) => {
            if (error) throw error;
            res.status(200).json(token)
        }
        );


    } catch (error) {
        console.log(error);
        return res.status(500).send('Server error');
    }

})






module.exports = router;