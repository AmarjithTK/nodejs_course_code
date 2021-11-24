const http = require('http')
const bodyParser = require('body-parser')

 
const express = require('express')

const app =  express()



app.use(bodyParser.urlencoded({extended:false}))




app.use('/add-product',(req,res,next)=>{
    res.send('<h2>add product page of expressjs</h2><form action="/product" method="POST"><input type="text" name="product" id=""><button type="submit">submit</button></form>')
    // next()
    res.redirect('/')

})



app.use('/product',(req,res,next)=>{
    res.send('<h1>product page of express</h1>')
    console.log(req.body)
    // next() next func should not be called at this moment, Why ?
})



// app.use('/') will run always a url starts with / 

app.use('/',(req,res,next)=>{
    console.log('this will run always')
    res.send('<h1>Homepage of express</h1>')
    // next() next func should not be called at this moment, Why ?
})




// const server = http.createServer(app)
// server.listen(4500)  two lines are replaced ->  by


app.listen(4500)



