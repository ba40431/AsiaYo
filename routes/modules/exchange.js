const express = require('express')
const router = express.Router()
const ExchangeController = require('../../controllers/exchangeController')
const exchangeController = new ExchangeController()


router.get('/', exchangeController.exchange)


module.exports = router