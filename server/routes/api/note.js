const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json(require('../../mock-data/get-notes.json'));
});

router.post('/', (req, res) => {
    res.status(200).json(require('../../mock-data/create-note.json'));
});

router.get('/:noteId', (req, res) => {
    res.status(200).json(require('../../mock-data/get-note.json'));
});

router.put('/:noteId', (req, res) => {
    res.status(200).json(require('../../mock-data/update-note.json'));
});

router.delete('/:noteId', (req, res) => {
    res.status(200).json(require('../../mock-data/delete-note.json'));
});

module.exports = router;
