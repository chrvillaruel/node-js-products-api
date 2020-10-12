const Product = require('../models/product');

exports.getProducts = (request, response, next) => {

    Product.findAll().then(result => {
            const data = {
                statusCode: 200,
                message: `Successfully Retrieved Products`,
                data: result
            }
            response.send(data)
        })
        .catch(error => {
            console.log(error);
        })
}

exports.getProductById = (request, response, next) => {

    const productId = request.params.productId

    Product.findByPk(productId).then(result => {
            const data = {
                statusCode: 200,
                message: `Successfully Retrieved Product ${result.title}`,
                data: result
            }
            response.send(data)
        })
        .catch(error => {
            console.log(error);
        })
}

exports.createNewProduct = (request, response, next) => {

    const { title, price, description } = request.body;

    Product.create({
            title: title,
            price: price,
            description: description
        }).then(result => {
            const data = {
                statusCode: 200,
                message: `Successfully Created Product ${title}`,
                data: result
            }
            response.send(data)
        })
        .catch(error => {
            console.log(error);
        })

}

exports.deleteProductById = (request, response, next) => {

    const productId = request.body.productId;

    Product.findByPk(productId).then(product => {
            return product.destroy();
        })
        .then(result => {
            console.log('DESTROYED PRODUCT');
            response.send(200, 'Successfully Deleted')
        })
        .catch(error => {
            console.log(error);
        })

}