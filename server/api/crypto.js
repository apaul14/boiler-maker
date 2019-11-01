const router = require('express').Router()
const {User} = require('../db/index')


router.get('/', async (req, res, next) => {
  try {
    const getAll = await User.findAll()  
    res.send(getAll)
  } catch (error) {
    next(error)
  }
})

module.exports = router