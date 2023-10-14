const express = require('express');

const querycntrlr = require('../Controller/querycntrlr');

const router = express.Router();

router.post('/postquery',querycntrlr.PostQueries);

router.get('/viewquery',querycntrlr.ViweQueries);

//router.post('/UpdateAnswer',querycntrlr.UpdateAnswers);

module.exports = router;

