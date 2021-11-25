const express = require('express')

const router  = express.Router()


/// this is /admin/add-product GET request

router.get('/add-product',(req,res,next)=>{
  res.sendFile(require.main.path+'/methodview/'+'admin.html')
  // next()

})

///  this is /admin/add-product POST request

router.post('/add-product',(req,res,next)=>{
    res.sendFile(path.join(require.main.path,'methodview','shop.html'))
    console.log(req.body)
    // next() next func should not be called at this moment, Why ?
  // res.redirect('/')

})

// module.exports = router

module.exports = router