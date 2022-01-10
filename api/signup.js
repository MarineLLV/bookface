// import express
const express = require('express');

// create the router
const router = express.Router();

// require the models
const UserModel = require('../models/UserModel');
const ProfileModel = require('../models/ProfileSchema');
const FollowerModel = require('../models/FollowerModel');

// need jwt + bcrypt for password
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// for email validation
const isEmail = require('validator/lib/isEmail');

// default user picture from my Cloudinary
const defaultUserPicture = 'https://res.cloudinary.com/dhi5y1obn/image/upload/v1641857668/bookFace/user-g7b28900fe_1280_vi4sus.png';

// check RegExp
const regexUserName = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/;


// 1. GET request for checking the username
router.get('/:username', async (req, res) => {
    const { username } = req.params

    try {
        // does the username has a length?
        if (username < 1) return res.status(401).send('Invalid username')

        // RegExp
        if (!regexUserName.test(username)) return res.status(401).send('Invalid username')

        // check database
        const user = await UserModel.findOne({ username: username.toLowerCase() })

        if (user) return res.status(401).send('Username already taken')

        return res.status(200).send('Available')

    } catch (error) {
        log(error);
        return res.status(500).send('Server error');
    }

})

// 2. POST request for creating a new user







module.exports = router;