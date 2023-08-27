const express = require('express')
const router = require('./routes')
const app = express()
const port = 3000

app.use(router)

app.listen(port, () => {
	console.log(`exchange-service listening on port ${port}`)
})