const { Router } = require('express');
const { Computer, User } = require('../../db.js')
//const userExtractor = require('../middleware/userExtractor.js.js');

const router = Router();

router.get('/', async (req, res) => {

    const allComputers = await Computer.findAll({
        include:{
            model: User
        }
    })

    const array = []

    allComputers.map(e => {
        if(!e.user){
            array.push(e)
        }
    })

    return res.status(200).json(array)

})

module.exports = router;