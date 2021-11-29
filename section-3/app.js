const bodyParser = require('body-parser')
const express = require('express')


const app = express()

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')


// pug view engine and views


app.set('view engine','pug')
app.set('views',require.main.path+'/methodview')

//  serving static files using express


// css file server for making all files inside public directory accessible (data encapsulation)
app.use(express.static(require.main.path+'/public'))

// parser for data
app.use(bodyParser.urlencoded({extended:false}))

// limiting middleware execution to only post requests

app.use('/admin',adminRoutes.router)


// app.use('/') will run always a url starts with / 

app.use(shopRoutes)




app.use('/',(req,res,next)=>{
    res.render('error.pug')
})
// const server = http.createServer(app)
// server.listen(4500)  two lines are replaced ->  by


app.listen(4500)

// console.log(require.main.filename)
