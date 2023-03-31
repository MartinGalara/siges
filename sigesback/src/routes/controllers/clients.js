const { Router } = require('express');
const { Client } = require('../../db.js')
const { User } = require('../../db.js')
const { Computer } = require('../../db.js')
const { createUser } = require('./utils.js')

const router = Router();

router.get('/', async (req, res) => {

   const allClients = await Client.findAll()

   for (let i = 0; i < allClients.length; i++) {
    
        const user = User.findAll({
            where:{
                info: allClients[i].client
            }
        })
    
        const newComputers = await Computer.create({
            alias: allClients[i].alias,
            teamviewer_id: allClients[i].teamviewer_id,
            userId: user[0].id
        })
   }

   return res.status(200).json("listo")
})

module.exports = router;