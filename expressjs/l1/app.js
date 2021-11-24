const http = require('http')

const express = require('express')

const app =  express()

app.use((req,res,next)=>{
    console.log('this is function 1')
    next()
})


app.use((req,res,next)=>{
    console.log('this is function 2')
})


const server = http.createServer(app)


server.listen(4500)
