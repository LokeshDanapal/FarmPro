const router = require('express').Router()
const soilcntrlr = require('../Controller/soilcntrlr')
router.post('/soil',soilcntrlr.displayTextureDescription)
module.exports = router