const express = require('express')
const path = require('path')
const { options } = require('./shop')
const router  = express.Router()


/// this is /admin/add-product GET request


const productData = [];
///  this is /admin/add-product POST request

router.post('/add-product',(req,res,next)=>{
    // res.sendFile(path.join(require.main.path,'methodview','shop.html'))
    console.log(req.body)


    
    productData.push({title:req.body.name})
    console.log(productData)
    res.redirect('/')

    // next() next func should not be called at this moment, Why ?
  // res.redirect('/')

})

router.get('/add-product',(req,res)=>{

  res.render('add-product',{pageTitle:'Add product page',path:'add-product'})
})


// module.exports = router

module.exports.router = router
module.exports.productData = productData
