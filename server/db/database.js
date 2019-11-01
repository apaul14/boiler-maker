const Sequelize = require('sequelize')
//const pkg = require('../../package.json')

const db = new Sequelize('postgres://localhost:5432/boilerMaker', {
  logging: false // unless you like the logs
  // ...and there are many other options you may want to play with
})

module.exports = db