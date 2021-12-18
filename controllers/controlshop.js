
const products = require('../models/modelproduct')


exports.getShopProducts = (req,res,next)=>{
  
    const productData = products.fetchAll((productdata)=>{

        res.render('shopview/productlist',{
            pageTitle:'Shop page',
            path:'sh',
            prods:productdata,
            hasprods: productdata.length > 0 ,
            activeShop:true
            
            })
        
    })


}