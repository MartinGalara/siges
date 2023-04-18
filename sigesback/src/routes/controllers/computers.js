const { Router } = require('express');
const { Computer,User } = require('../../db.js')

const router = Router();

router.get('/', async (req, res) => {

    const {userId} = req.query;
    const {id} = req.params;
    console.log(id)

    try {

        if(id){
            const computer = await Computer.findByPk(id)
            return res.status(200).json(computer)
        }

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