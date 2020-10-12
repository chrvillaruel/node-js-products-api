const { Sequelize } = require('sequelize')

const sequelizeConnection = require('../database/connection')

const Product = sequelizeConnection.define('product', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    title: Sequelize.STRING,
    price: {
        type: Sequelize.DOUBLE
    },
    description: {
        type: Sequelize.STRING
    }
})

module.exports = Product