const { Router } = require('express');
const { Computer, User } = require('../../db.js')
//const userExtractor = require('../middleware/userExtractor.js.js');

const router = Router();

router.get('/', async (req, res) => {

console.log("asd")
})

module.exports = router;