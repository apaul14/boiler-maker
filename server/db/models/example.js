const Sequelize = require('sequelize')
const db = require('../database')

const Example = db.define("example", {
  name: {
    type:Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  age: {
    type: Sequelize.INTEGER
  }, 
  email: {
    type: Sequelize.STRING,
    allowNull: false, 
    validate: {
      isEmail: true,
      notEmpty: true
    }
  }
})

module.exports = Example