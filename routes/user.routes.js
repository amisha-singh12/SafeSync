const express = require('express');
const router = express.Router();

const { body, validationResult } = require('express-validator');

const UserModel = require('../models/user.model');

router.get('/register', (req, res) => {
    res.render('register');
})

router.post('/register',
    body('email').trim().isEmail().isLength({ min: 11 }),
    body('password').trim().isLength({ min: 4 }),
    body('username').trim().notEmpty().isLength({ min: 3}),
    (req, res) => {
    const errors = validationResult(req);
    
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array(),
            message: 'Invalid input'
         });
    }
    const {username, email, password} = req.body;
    const newUser = UserModel.create({
        username,
        email,
        password
    })
     res.json(newUser);
})

module.exports = router;