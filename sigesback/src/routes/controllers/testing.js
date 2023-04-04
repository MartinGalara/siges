const { Router } = require('express');
const { Testing } = require('../../db.js')
const { Computer } = require('../../db.js')
//const userExtractor = require('../middleware/userExtractor.js.js');

const router = Router();

router.get('/', async (req, res) => {
    
    const allTesting = await Testing.findAll()

    for (let i = 0; i < allTesting.length; i++) {
        
        const computersToUpdate = await Computer.findAll({
            where:{
                userId: allTesting[i].find
            }
        })

        for (let j = 0; j < computersToUpdate.length; j++) {
            await computersToUpdate[j].update({
                userId: allTesting[i].replace
            })
            
        }
        
    }

    return res.status(200).send("listo")

})

module.exports = router;