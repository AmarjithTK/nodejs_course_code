const products = require('../models/modelproduct')


exports.getProducts = (req, res, next) => {

    const productData = products.fetchAll((productdata) => {

        res.render('shopview/productlist', {
            pageTitle: 'Shop page',
            path: 'productshop',
            prods: productdata,
            hasprods: productdata.length > 0,
            activeShop: true

        })

    })


}



exports.getIndex = (req, res) => {

    const productData = products.fetchAll((productdata) => {

        res.render('shopview/productindex', {
            pageTitle: 'Index page',
            path: '/',
            prods: productdata,
            hasprods: productdata.length > 0,
            activeShop: true

        })

    })


}

exports.getDetails = (req, res) => {

    const params = req.params.productId;

    console.log(params);

    res.redirect('/')

}

exports.getCart = (req, res, next) => {

}
exports.getOrders = (req, res, next) => {

}
exports.getCheckout = (req, res, next) => {

}