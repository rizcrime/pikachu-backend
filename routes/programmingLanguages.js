const express = require('express');
const router = express.Router();
const programmingLanguages = require('../services/programmingLanguages');

/* GET programming languages. */
router.get('/user', async function (req, res, next) {
    try {
        res.json(await programmingLanguages.getMultiple(req.query.page));
    } catch (err) {
        console.error(`Error while getting programming languages `, err.message);
        next(err);
    }
});

router.post('/insert-user', async function (req, res, next) {
    try {
        res.json(await programmingLanguages.create(req.body));
    } catch (err) {
        console.error(`Error while creating programming language`, err.message);
        next(err);
    }
});

router.put('/update-user/:id', async function (req, res, next) {
    try {
        res.json(await programmingLanguages.update(req.params.id, req.body));
    } catch (err) {
        console.error(`Error while updating programming language`, err.message);
        next(err);
    }
});

router.delete('/delete-user/:id', async function (req, res, next) {
    try {
        res.json(await programmingLanguages.remove(req.params.id));
    } catch (err) {
        console.error(`Error while deleting programming language`, err.message);
        next(err);
    }
});

module.exports = router;