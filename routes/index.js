const express = require('express')
const router = express.Router()
const exchange = require('./modules/exchange')

router.use('/exchange', exchange)

module.exports = router