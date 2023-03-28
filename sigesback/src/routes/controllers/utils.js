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
            address: data.address
        })
        return newUser;
    }
    else{
        console.log("entre aca xq hay 1 repetido")
        return await createUser(data)
    }

}

function generarCodigo() {
    let codigo = "";
    const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    for (let i = 0; i < 6; i++) {
      codigo += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    return codigo;
  }

  module.exports = {createUser}