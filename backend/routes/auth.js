const express = require('express');
const {body} = require('express-validator');

const User = require('../models/user');
const authController = require('../controllers/auth');
const isAuth = require('../middleware/isAuth');

const router = express.Router();

router.post('/signup',[
    body('email')
    .isEmail()
    .withMessage('Please enter a valid email')
    .custom((value, {
        req
    }) => {
        return User.findOne({
            email: value
        }).then(userDoc => {
            if (userDoc) {
                return Promise.reject('E-Mail address already exists!');
            }
        })
    })
    .normalizeEmail(),
    body('username')
    .trim()
    .isLength({
        min: 4
    }).withMessage('Username must be at least 4 characters long!')
    .custom((value, {
        req
    }) => {
        return User.findOne({
            username: value
        }).then(userDoc => {
            if (userDoc) {
                return Promise.reject('Username address already exists!');
            }
        })
    }),
    body('password')
    .trim()
    .isLength({
        min: 8
    }).withMessage('Password must be at least 8 characters long!')
    ], authController.signup);

router.post('/login', [
    body('email')
    .isEmail()
    .withMessage('Please enter a valid email')
    .normalizeEmail(),
    body('password')
    .trim()
    .isLength({
        min: 8
    }).withMessage('Password must be at least 8 characters long!')
    ], authController.login);

router.get('/verify', isAuth, authController.verify)

module.exports = router;