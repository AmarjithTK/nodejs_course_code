const products = require('../models/modelproduct')


exports.getAddProduct = (req, res) => {
    // console.log(req.body)
    res.render('adminview/addproducts', {
        pageTitle: 'Add product page',
        path: 'productadd',


    })

}

exports.postAddProduct = (req, res) => {

    const product = new products(req.body)
    product.save()

    res.redirect('/')


}

exports.getProductList = (req, res) => {
    // return render('adminview/listproducts', {
    //     pageTitle: 'list products',
    //     path: 'listproducts',
    //     products
    // })



    const productData = products.fetchAll((productdata) => {

        return res.render('adminview/listproducts', {
            pageTitle: 'list products',
            path: 'listproducts',
            prods: productdata,
            hasprods: productdata.length > 0,
            activeShop: true

        })

    })
}