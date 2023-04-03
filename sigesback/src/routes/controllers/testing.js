const { Router } = require('express');
const { User } = require('../../db.js')
//const userExtractor = require('../middleware/userExtractor.js.js');

const router = Router();

router.get('/', async (req, res) => {
    const {email} = req.query
    try {
        if(email){
            const user = await User.findAll({
                where:{
                    email: email
                }
            })
        return res.status(200).json(user)
        }
        const allUsers = await User.findAll();
        return res.status(200).json(allUsers)
    } catch (error) {
        return res.status(400).send(error.message)
    }
    
})

module.exports = router;