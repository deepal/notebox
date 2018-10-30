const express = require('express');
const router = express.Router();
const noteRoutes = require('./routes/note');
const noteBoxRoutes = require('./routes/notebox');

router.use('/note', noteRoutes);
router.use('/noteBox', noteBoxRoutes);

module.exports = router;