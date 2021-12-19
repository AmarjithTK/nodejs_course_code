const products = require('../models/modelproduct')


exports.getProducts = (req, res, next) => {

    // const productData = products.fetchAll((productdata) => {



    // })

    products.fetchAll()
        .then(data => {


            return res.render('shopview/productlist', {
                pageTitle: 'Shop page',
                path: 'productshop',
                prods: data,
                hasprods: data.length > 0,
                activeShop: true

            })

        })
        .catch(err => {
            console.log(err)
        })





}



exports.getIndex = (req, res) => {

    // const productData = products.fetchAll((productdata) => {


    // })

    products.fetchAll()
        .then(data => {


            return res.render('shopview/productindex', {
                pageTitle: 'Index page',
                path: '/',
                prods: data,
                hasprods: data.length > 0,
                activeShop: true

            })

        })
        .catch(err => {
            console.log(err)
        })




}

exports.getDetails = (req, res) => {

    const params = req.params.productId;

    console.log(params);

    products.findProductById(params).then(productdata => {
        console.log(productdata);
        // return res.render('shopview/productindex', {
        //     pageTitle: 'Index page',
        //     path: '/',
        //     prods: data,
        //     hasprods: data.length > 0,
        //     activeShop: true

        // })

        return res.render('shopview/productdetail', {
            pageTitle: 'Product details',
            path: 'productshop',
            product: productdata,


        })

    })



}

exports.getCart = (req, res, next) => {

}
exports.getOrders = (req, res, next) => {

}
exports.getCheckout = (req, res, next) => {

}