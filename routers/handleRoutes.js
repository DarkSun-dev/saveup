const express = require('express')
const userController = require('./../controllers/userController')
const controller = require('./../controllers/controller')

const router = express.Router()
router.post('/createEntidade', controller.criarEntidade)
router.get('/getEntidade', controller.getEntidade)
router.get('/getEmit', controller.getAlert)
router.post('/emit', controller.emitAlert)
module.exports = router