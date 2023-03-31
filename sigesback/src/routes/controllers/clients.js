const { Router } = require('express');
const { Client } = require('../../db.js')
const { User } = require('../../db.js')
const { createUser } = require('./utils.js')

const router = Router();

router.get('/', async (req, res) => {

    const allClients = await Client.findAll()

    for (let i = 0; i < allClients.length; i++) {
        
        const user = await User.findAll({
            where:{
                info: allClients[i].client,
                email: " "
            }
        })

        if(user.length === 0){

            const newUser = await createUser({
                info: allClients[i].client
            })

        }
        
    }

    const allUsers = User.findALl()

    return res.status(200).json(allUsers)

})

module.exports = router;