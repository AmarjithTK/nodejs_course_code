
// import { requestData } from "../routes/add.js";

const express = require('express')
const router = express.Router()


const data = require('../routes/add')


router.get('/',(req,res)=>{

    res.render('view',{pageTitle:'users page',data:data.requestData})

})

module.exports.viewRouter = router
