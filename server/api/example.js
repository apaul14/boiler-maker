const router = require('express').Router()
const {Example} = require('../db/index')


router.get('/', async (req, res, next) => {
  try {
    const getAll = await Example.findAll()  
    res.send(getAll)
  } catch (error) {
    next(error)
  }
})

module.exports = router