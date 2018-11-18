const express = require('express');
const passport = require('passport');

const router = express.Router();

router.get('/login/success', (req, res) => {
    res.status(200).json({
        success: true,
        user: req.user
    });
});

router.get('/login/failed', (req, res) => {
    res.status(200).json({
        success: false,
        user: null
    });
});

router.get('/logout', (req, res) => {

});

router.get('/login/google', passport.authenticate('google', {
    scope: [
        'https://www.googleapis.com/auth/userinfo.profile',
        'https://www.googleapis.com/auth/userinfo.email'
    ]
}));

router.get('/google/redirect',
    passport.authenticate('google', {
        successRedirect: '/auth/login/success',
        failureRedirect: '/auth/login/failed',
        failureFlash: true
    }));

router.get('/user', (req, res) => {
    if (req.user) {
        res.status(200).json({
            success: true,
            data: {
                user: req.user
            }
        });
    } else {
        res.status(401).json({ success: false });
    }
});

router.put('/user', (req, res) => {

});

module.exports = router;
