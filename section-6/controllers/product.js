const products = require('../models/productModel')


exports.getAddProduct = (req,res) => {
    // console.log(req.body)
    res.render('add', { 
        pageTitle: 'Add product page', 
        path: 'add-product',
        activeProducts: true
     })
  
}

exports.postAddProduct = (req, res) => {
    
    const product =  new products(req.body.name)
    product.save()
    
    res.redirect('/')


}

exports.errorPage = (req,res) => {
    res.render('error',
        {
            pageTitle:'Error Page'
        }

    )
}


exports.getShopProducts = (req,res,next)=>{
  
    const productData = products.fetchAll((productdata)=>{

        res.render('shop',{
            pagetitle:'Shop page',
            path:'shop-product',
            prods:productdata,
            hasprods: productdata.length > 0 ,
            activeShop:true
            })
        
    })

  
    
}