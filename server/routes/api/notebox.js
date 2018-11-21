const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json(require('../../mock-data/get-noteboxes.json'));
});

router.post('/', (req, res) => {
    res.status(201).json(require('../../mock-data/create-notebox.json'));
});

router.get('/:noteBoxId', (req, res) => {
    res.status(200).json(require('../../mock-data/get-notebox.json'));
});

router.get('/:noteBoxId/note', (req, res) => {
    res.status(200).json(require('../../mock-data/get-notebox-notes.json'));
});

router.put('/:noteBoxId', (req, res) => {
    res.status(200).json(require('../../mock-data/update-notebox.json'));
});

router.delete('/:noteBoxId', (req, res) => {
    res.status(200).json(require('../../mock-data/delete-notebox.json'));
});

module.exports = router;
