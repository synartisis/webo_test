const express = require('express')
const esdev = require('esdev')
const app = express()
require('../common/common')
const isProd = false
const port = process.argv[2] || 4000

app.use(esdev({
  // globals: {
  //   'vue/dist/vue': 'Vue',
  // },
  paths: {
    'src/common': 'common',
  },
}))

app.use(express.static(__dirname + '/../client/'))
app.use(express.static(__dirname + '/../client/landing/'))

app.use('/api/testapi', require('./api/testapi'))
app.get('/api/test', (req, res) => res.send({ 'api testing': 'ok' }))

app.listen(port, () => console.log('listening ' + port))