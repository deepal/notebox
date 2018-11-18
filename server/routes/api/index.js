const express = require('express');
const router = express.Router();
const noteRoutes = require('./note');
const noteBoxRoutes = require('./notebox');

router.use((req, res, next) => {
    if (req.user) {
        next();
    } else {
        res.status(401).send({ success: false });
    }
});

router.use('/note', noteRoutes);
router.use('/noteBox', noteBoxRoutes);

module.exports = router;