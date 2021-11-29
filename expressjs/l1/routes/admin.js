const express = require('express')
const path = require('path')
const router  = express.Router()


/// this is /admin/add-product GET request

router.get('/add-product',(req,res,next)=>{
  res.render('admin')
  // next
})

const productData = [];
///  this is /admin/add-product POST request

router.post('/add-product',(req,res,next)=>{
    // res.sendFile(path.join(require.main.path,'methodview','shop.html'))
    console.log(req.body)
    res.redirect('/')


    
    // productData.push({title:req.body.name})
    // next() next func should not be called at this moment, Why ?
  // res.redirect('/')

})

// module.exports = router

module.exports = {
  router:router,
  productData:productData

}