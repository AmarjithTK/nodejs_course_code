const http = require('http')

const express = require('express')

const app =  express()

app.use((req,res,next)=>{
    console.log('this is function 1')
    next()
})


app.use((req,res,next)=>{
    console.log('this is function 2')
    res.send('<h1> This is express framework </h1>')
})


// const server = http.createServer(app)
// server.listen(4500)  two lines are replaced ->  by


app.listen(4500)



