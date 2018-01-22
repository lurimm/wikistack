const express = require('express');
const router = express.Router();

const wikiRouter = require('./wiki.js')
const user = require('./user')


router.use('/wiki/', wikiRouter)


module.exports = router;
