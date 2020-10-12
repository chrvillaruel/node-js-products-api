const express = require('express');

const productController = require('../controllers/product-controller');

const router = express.Router();

router.get('/products', productController.getProducts);

router.post('/add-product', productController.createNewProduct);

router.get('/get-product-by-id/:productId', productController.getProductById);

router.post('/delete-product', productController.deleteProductById);

module.exports = router;