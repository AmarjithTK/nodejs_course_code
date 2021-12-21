const products = require('../models/modelproduct')
const cart = require('../models/modelcart');
const ProductClass = require('../models/modelproduct');



exports.getProducts = (req, res, next) => {

    // const productData = products.fetchAll((productdata) => {



    // })

    products.fetchAll()
        .then(data => {

            console.log(data);
            return res.render('shopview/productlist', {
                pageTitle: 'Shop page',
                path: 'productshop',
                prods: data,

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


    ProductClass.fetchAll().then(data => {
        cart.fetch().then(uuids => {


            // const cartelems = data.filter(productdata => {
            //     uuids.forEach(uuid => {
            //         if (uuid == productdata.uuid) {
            //             return productdata
            //         }
            //     })
            // })

            let cartelems = []

            data.forEach(productdata => {
                uuids.forEach(uuid => {
                    if (uuid == productdata.uuid) cartelems.push(productdata)
                })
            })

            // const cartelems = data.filter(elem => {
            //     const elems = []
            //     uuids.forEach(element => {
            //         if (element == elem.uuid) {
            //             elems.push(elem)
            //         }
            //     });
            //     return elems
            // })
            console.log(cartelems)
            return res.render('shopview/productcart', {
                pageTitle: 'Cart page',
                path: 'productcart',
                prods: cartelems
            })

        })

    })


}

exports.postCart = (req, res) => {

    const uuid = req.body.productId
    console.log(uuid);
    products.findProductById(uuid).then(product => {

            cart.addProduct(id = uuid, price = product.price)


        })
        .catch(err => console.log(err, 'this is an error from findproduct by id'))
    res.redirect('/products')


}


exports.getOrders = (req, res, next) => {

}
exports.getCheckout = (req, res, next) => {

}