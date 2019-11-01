const router = require('express').Router()





router.use('/example', require('./example'))
router.use('/user', require ('./crypto'))



router.use((req, res, next) => {
  const err = new Error('API route not found!')
  err.status = 404
  next(err)
})

module.exports = router
