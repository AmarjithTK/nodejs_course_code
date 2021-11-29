const express = require('express')
const admin = require('./admin')

const adminData = require('./admin')

const router = express.Router()


router.get('/',(req,res,next)=>{
    // res.sendFile(require.main.path+'/methodview/shop.html')
    res.render('shop')
    console.log('shop js',adminData.productData)
    // next() next func should not be called at this moment, Why ?
})


// module.exports = router

module.exports = router
