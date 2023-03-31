const { Router } = require('express');
const { Client } = require('../../db.js')

const router = Router();

router.get('/', async (req, res) => {

    const allClients = await Client.findAll()

    return res.status(200).json(allClients)

})

module.exports = router;