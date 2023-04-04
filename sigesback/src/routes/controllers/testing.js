const { Router } = require('express');
const { Testing } = require('../../db.js')
const { Computer } = require('../../db.js')
//const userExtractor = require('../middleware/userExtractor.js.js');

const router = Router();

router.get('/', async (req, res) => {
    
    const allTesting = await Testing.findAll()

    return res.status(200).json(allTesting)

})

module.exports = router;