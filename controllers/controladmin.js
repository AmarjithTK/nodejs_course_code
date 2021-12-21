const ProductClass = require('../models/modelproduct')


exports.getAddProduct = (req, res) => {
    console.log(req.body)
    res.render('adminview/addproducts', {
        pageTitle: 'Add product page',
        path: 'productadd',


    })

}

exports.postAddProduct = (req, res) => {

    const product = new ProductClass(req.body)
    console.log(req.body)
    product.save()

    res.redirect('/')


}



exports.getEditProduct = (req, res) => {
    console.log(req.body)
    const editTrigger = req.query.edit
    res.render('adminview/addproducts', {
        pageTitle: 'Edit product page',
        path: 'Edit product',
        editmode: editTrigger

    })

}



exports.getProductList = (req, res) => {
    // return render('adminview/listproducts', {
    //     pageTitle: 'list products',
    //     path: 'listproducts',
    //     products
    // })


    ProductClass.fetchAll()
        .then(data => {


            return res.render('adminview/listproducts', {
                pageTitle: 'list products',
                path: 'listproducts',
                prods: data,
                hasprods: data.length > 0,
                activeShop: true

            })

        })
        .catch(err => {
            console.log(err)
        })



    // products.fetchAll((productdata) => {

    //     return res.render('adminview/listproducts', {
    //         pageTitle: 'list products',
    //         path: 'listproducts',
    //         prods: productdata,
    //         hasprods: productdata.length > 0,
    //         activeShop: true

    //     })



    // })

}