const { Router } = require('express');
const { Client } = require('../../db.js')
const { User } = require('../../db.js')
const { createUser } = require('./utils.js')

const router = Router();

router.get('/', async (req, res) => {


})

module.exports = router;