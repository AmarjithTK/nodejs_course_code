
// import { requestData } from "../routes/add.js";

const express = require('express')
const router = express.Router()


const data = require('../routes/add')


router.get('/',(req,res)=>{

    res.render('view',{pageTitle:'users page',data:data.requestData,datalength:data.requestData.length > 0 })

})

module.exports.viewRouter = router
