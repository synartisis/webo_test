const express = require('express')
const app = express()
require('../common/common')
const isProd = false
const port = process.env.app_port || 3000


app.use(express.static(__dirname + '/../client/'))
app.use(express.static(__dirname + '/../client/landing/'))

app.use('/api/testapi', require('./api/testapi'))
app.get('/api/test', (req, res) => res.send({ 'api testing': 'ok' }))

app.listen(port, () => console.log('listening ' + port))