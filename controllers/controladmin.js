const products = require('../models/modelproduct')


exports.getAddProduct = (req,res) => {
    // console.log(req.body)
    res.render('adminview/addproducts', { 
        pageTitle: 'Add product page', 
        path: 'productadd',
        activeProducts: true,
        
     })
  
}

exports.postAddProduct = (req, res) => {
    
    const product =  new products(req.body.name)
    product.save()
    
    res.redirect('/')


}




