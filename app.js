// Import modules for the Application
const express = require('express');
const bodyParser = require('body-parser')

// Declare app for express 
const app = express()

// This will be the port for the API locally
const port = 3000

// Sequelize ORM for the database
const sequelize = require('./database/connection');

// Routes for Products API
const productRoutes = require('./routes/product-routes')

// This body parser will make it easier to get request body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

// Express use the product api routes
app.use(productRoutes);

// It will listen to the port 3000
app.listen(port, () => {
    console.log(`Products API listening at http://localhost:${port}`)
})

sequelize.sync()
    .then(result => {})
    .catch(error => {
        console.log(error)
    })