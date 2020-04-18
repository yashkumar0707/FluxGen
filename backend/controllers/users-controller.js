const HttpError = require('../models/http-error')
const mongoose = require('mongoose')
const { validationResult } = require('express-validator')
const uuid = require('uuid/v4')
const User = require('../models/user')
let DUMMY_USERS = [
    {
        id: 'u1',
        name: 'Yash',
        email: 'yash@gmail.com',
        password: 'yash1234'
    }
]

const login = async (req, res, next) => {
    const { email, password } = req.body
    // const identifiedUser = DUMMY_USERS.find(u => u.email === email)
    let existingUser
    try {
        existingUser = await User.findOne({ email: email })
    }
    catch (err) {
        console.log(err)
        return next(new HttpError('login failed', 500))
    }
    if (!existingUser || existingUser.password !== password) {
        return next(new HttpError('Could not identify user, credentials are wrong'))
    }
    // if (!identifiedUser || identifiedUser.password != password) {
    //     throw new HttpError('COuld not identify user, credentials are wrong')
    // }
    res.json({ message: 'logged in', user: existingUser.toObject({ getters: true }) })
}

exports.login = login