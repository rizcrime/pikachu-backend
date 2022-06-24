const express = require('express');
const router = express.Router();
const programmingLanguages = require('../services/programmingLanguages');

/* GET programming languages. */
router.get('/data', async function (req, res, next) {
    try {
        res.json(await programmingLanguages.getMultiple(req.query.page));
    } catch (err) {
        console.error(`Error while getting data `, err.message);
        next(err);
    }
});

router.post('/insert-data', async function (req, res, next) {
    try {
        res.json(await programmingLanguages.create(req.body));
    } catch (err) {
        console.error(`Error while creating data`, err.message);
        next(err);
    }
});

router.put('/update-data/:id', async function (req, res, next) {
    try {
        res.json(await programmingLanguages.update(req.params.id, req.body));
    } catch (err) {
        console.error(`Error while updating data`, err.message);
        next(err);
    }
});

router.delete('/delete-data/:id', async function (req, res, next) {
    try {
        res.json(await programmingLanguages.remove(req.params.id));
    } catch (err) {
        console.error(`Error while deleting data`, err.message);
        next(err);
    }
});

module.exports = router;