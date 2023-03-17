const { Router } = require('express');
const { User } = require('../../db.js')
const { Op } = require("sequelize");
//const userExtractor = require('../middleware/userExtractor.js.js');

const router = Router();

router.get('/', async (req, res) => {
    try {
        const allUsers = await User.findAll();
        return res.status(200).json(allUsers)
    } catch (error) {
        return res.status(400).send(error.message)
    }
    
})

router.post('/', async (req, res) => {
    const { name , email, hashPassword} = req.body
    try {
        const newUSer = await User.create({
            name,
            email,
            hashPassword
        })
        return res.status(200).send("Usuario creado")
    } catch (error) {
        return res.status(400).send(error.message)
    }
   
})

module.exports = router;