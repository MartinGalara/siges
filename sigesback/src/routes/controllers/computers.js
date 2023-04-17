const { Router } = require('express');
const { Computer,User } = require('../../db.js')

const router = Router();

router.get('/', async (req, res) => {

    const {userId} = req.query;

    try {

        if(userId){
            const computers = await Computer.findAll({
                where:{
                    userId: userId
                }
            })

            return res.status(200).json(computers)
        }

        const allComputers = await Computer.findAll({
            include:{
                model: User
            }
        })

        return res.status(200).json(allComputers)
    } catch (error) {
        console.log(error.message)
         return res.status(400).send(error.message)
    }
})

module.exports = router;