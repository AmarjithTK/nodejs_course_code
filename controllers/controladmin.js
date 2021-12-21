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
    // console.log(req.body)

    //  const  dynamic_param = req.params.productId

    const editmodeq = req.query.editmode
    const uuidq = req.params.productId

    const editmode = editmodeq == "true" ? true : false


    if (editmode) {

        ProductClass.findProductById(uuidq).then(data => {


                res.render('adminview/editproducts', {
                    pageTitle: 'Edit product page',
                    path: 'Edit product',
                    editmode: editmode,
                    productdata: data
                })

            })
            .catch(err => console.log(err))
    }


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