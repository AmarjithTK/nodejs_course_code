const express = require('express')

const router = express.Router()


router.get('/',(req,res,next)=>{
    console.log('this will run always')
    res.send('<h1>Homepage of express</h1>')
    // next() next func should not be called at this moment, Why ?
})


// module.exports = router

module.exports = router
