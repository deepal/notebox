const express = require('express');
const passport = require('passport');
const { validateAuthRouteAccess } = require('../middleware/auth');

const router = express.Router();

router.get('/login/success', validateAuthRouteAccess);
router.get('/login/failed', validateAuthRouteAccess);

router.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/');
});

router.get('/login/google', (req, res) => {
    if (req.user) {
        const { homepageUrl } = req.user;
        if (homepageUrl) {
            res.redirect(homepageUrl);
        } else {
            res.redirect('/create-note');
        }
    } else {
        passport.authenticate('google', {
            scope: [
                'https://www.googleapis.com/auth/userinfo.profile',
                'https://www.googleapis.com/auth/userinfo.email'
            ]
        })(req, res);
    }
});

router.get('/google/redirect',
    passport.authenticate('google', {
        successRedirect: '/auth/login/success',
        failureRedirect: '/auth/login/failed',
        failureFlash: true
    })
);

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
