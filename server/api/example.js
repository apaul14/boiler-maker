const router = require('express').Router()


router.get('/', (req, res, next) => {
  try {
    res.send("sup")  
  } catch (error) {
    next(error)
  }
})

module.exports = router