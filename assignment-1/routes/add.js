

const express = require('express')
const router = express.Router()

router.get('/add',(req,res)=>{

    res.render('add',{pageTitle:'add product page'})


})


const requestData = []


router.post('/add',(req,res)=>{

    requestData.push({title:req.body.username})

    res.redirect('/')

})



module.exports.addRouter = router
module.exports.requestData= requestData




