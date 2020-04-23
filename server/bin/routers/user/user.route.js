const {
    addUser
} = require('../../modules/user/comands/user.comand')

const router = require("express").Router();

router.post('/addUser', addUser)

module.exports = router