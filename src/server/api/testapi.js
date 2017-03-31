const r = require('express').Router()

r.get('/', (req, res) => res.send('/api/testapi here'))

module.exports = r