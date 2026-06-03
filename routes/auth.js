const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');

router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'], session: false }));


router.get('/google/callback',
    passport.authenticate('google', { failureRedirect: '/auth/failure', session: false }),
    (req, res) => {
        const token = jwt.sign(
            { id: req.user.goggleId, email: req.user.email },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );
        res.json({
            message: "Authentication successful.",
            token: token
        });
    }
);

router.get('/failure', (req, res) => {
    res.status(401).json({ message: "Google authentication failed." });
});

module.exports = router;