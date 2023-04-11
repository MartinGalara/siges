const { Router } = require('express');
const { Opticket } = require('../../db.js')

const router = Router();

router.post('/', async (req, res) => {

    const { name, client, detail } = req.body;

    if(!name || !detail ) return res.status(400).json({message: "Faltan parametros"})

    try {
        const newOpTicket = await Opticket.create(
            {
                name,
                client,
                detail
            }
        )
        return res.status(200).json(newOpTicket)
    } catch (error) {
        return res.status(400).send(error.message)
    }
   
})

module.exports = router;