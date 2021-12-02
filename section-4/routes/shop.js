const express = require('express')
const admin = require('./admin')

const adminData = require('./admin')

const router = express.Router()


router.get('/',(req,res,next)=>{
    const data = adminData.productData
    // res.sendFile(require.main.path+'/methodview/shop.html')
    console.log('this is my data parsed through whatever shit im going throguh without the national institute of technology hamirpur',adminData.productData)
    res.render('shop-product',{pagetitle:'Shop page',path:'shop-product',prods:data,hasprods: data.length >0 , activeShop:true})
    
    // next() next func should not be called at this moment, Why ?
})

// module.exports = router

module.exports = router
