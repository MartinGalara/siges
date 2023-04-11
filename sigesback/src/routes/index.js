const { Router } = require("express");
// const { Excercise , Muscle, Product, Routine, User, Class } = require("../db.js");
const { Op } = require("sequelize");
const users = require("./controllers/users.js")
const tickets = require("./controllers/tickets.js")
const computers = require("./controllers/computers.js")
const testing = require("./controllers/testing.js")
const optickets = require("./controllers/optickets.js")

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

router.use('/users', users)
router.use('/tickets', tickets)
router.use('/computers', computers)
router.use('/testing', testing)
router.use('/optickets', optickets)

module.exports = router;
