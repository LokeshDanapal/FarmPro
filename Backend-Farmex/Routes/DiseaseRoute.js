const router = require('express').Router()
const diseaseCntrlr = require('../Controller/diseasecntrlr')
router.post('/disease', diseaseCntrlr.displayDiseaseDescription)
module.exports = router