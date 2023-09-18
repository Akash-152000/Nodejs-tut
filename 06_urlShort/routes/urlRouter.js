const express = require('express')
const {handleGetShortUrl,handleRedirectUrl,handleAnalytics } = require('../controllers/urlShort')

const urlRouter = express.Router()

urlRouter.post('/',handleGetShortUrl)
urlRouter.get('/:shortId',handleRedirectUrl)
urlRouter.get('/analytics/:id',handleAnalytics)

module.exports = urlRouter