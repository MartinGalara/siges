const { Router } = require('express');
const { User } = require('../../db.js')
//const userExtractor = require('../middleware/userExtractor.js.js');

const router = Router();

router.get('/', async (req, res) => {
    const asdasd = [
        "DT7602",
        "ZH7869",
        "AS6496",
        "XK7499",
        "QT3048",
        "XU0641",
        "MN7809",
        "WD7212",
        "UP4332",
        "UC0189",
        "VX4848",
        "IY6068",
        "QN2356",
        "CE8676",
        "MS1425",
        "FZ5361",
        "XP4360",
        "YT2140",
        "PW4157",
        "PX4921",
        "WQ8404",
        "UT7218",
        "LX6713",
        "ZF4816",
        "KC2678",
        "BZ5386",
        "RI0891",
        "AM4503",
        "HE5459",
        "CY2719",
        "CW9340"
    ]
    
    for (let i = 0; i < asdasd.length; i++) {
        try {
            const userToDelete = await User.findByPk(e)
            console.log(userToDelete)
            
        } catch (error) {
            console.log(error)
        }
        
    }

    return res.status(200).send("listo")
    
})

module.exports = router;