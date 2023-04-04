const { Router } = require('express');
const { Testing } = require('../../db.js')
const { User } = require('../../db.js')
//const userExtractor = require('../middleware/userExtractor.js.js');

const router = Router();

router.get('/', async (req, res) => {
    
    const allTesting = await Testing.findAll()

    for (let i = 0; i < allTesting.length; i++) {

        const userToDelete = await User.findByPk(allTesting[i].find)

        await userToDelete.destroy()
        
    }

    return res.status(200).send("listo")

})

module.exports = router;