const { User } = require('../../db.js')

const createUser = async (data) => {

    const userId = generarCodigo()

    const findUser = await User.findAll({
        where:{
            id: userId
        }
    })

    if(findUser.length === 0){
        const newUser = await User.create({
            id: userId,
            email: data.email,
            info: data.info
        })
        return newUser;
    }
    else{
        return await createUser(data)
    }

}

function generarCodigo() {
    let codigo = "";
    const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (let i = 0; i < 2; i++) {
      codigo += letras.charAt(Math.floor(Math.random() * letras.length));
    }
    const numeros = "0123456789";
    for (let i = 0; i < 4; i++) {
      codigo += numeros.charAt(Math.floor(Math.random() * numeros.length));
    }
    return codigo;
  }

  module.exports = {createUser}