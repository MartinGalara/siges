const { Router } = require('express');
const { Webuser } = require('../../db.js')
const bcrypt = require('bcrypt');
//const userExtractor = require('../middleware/userExtractor.js.js');

const router = Router();

router.get('/', async (req, res) => {
    try {

        const { userId } = req.query;

        if(userId){
            const webUsers = await Webuser.findAll({
                where:{
                    userId: userId
                }
            })

            return res.status(200).json(webUsers)
        }

        const allWebUsers = await Webuser.findAll()

        return res.status(200).json(allWebUsers)
        
    } catch (error) {
        
    }

    
})

router.post('/', async (req, res) => {

    try {
        const { username, password, userId } = req.body;
    
        // Realizar el hash de la contraseña utilizando algún algoritmo de hash, como bcrypt
        const hashPassword = await bcrypt.hash(password, 10);
    
        // Crear la nueva entrada en la base de datos
        const webUser = await Webuser.create({
          username,
          hashPassword,
          userId
        });
    
        res.status(201).json(webUser);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al crear el operador' });
      }

})

module.exports = router;