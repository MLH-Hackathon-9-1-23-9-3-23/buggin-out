const router = require('express').Router();
const { getWords } = require('../controller');

router.get('/words', getWords);

module.exports = router;