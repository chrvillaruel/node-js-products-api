const Sequelize = require('sequelize')

const sequelize = new Sequelize('node-js-product-api', 'root', '', {
    dialect: 'mysql',
    host: 'localhost'
})

module.exports = sequelize;