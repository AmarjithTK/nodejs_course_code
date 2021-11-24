const express = require('express')

const router  = express.Router()

router.get('/add-product',(req,res,next)=>{
    res.send('<h2>add product page of expressjs</h2><form action="/product" method="POST"><input type="text" name="product" id=""><button type="submit">submit</button></form>')
    // next()
    res.redirect('/')

})

router.post('/product',(req,res,next)=>{
    res.send('<h1>product page of express</h1>')
    console.log(req.body)
    // next() next func should not be called at this moment, Why ?
})

// module.exports = router

module.exports = router