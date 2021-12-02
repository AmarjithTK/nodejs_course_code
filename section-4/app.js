const bodyParser = require('body-parser')

const express = require('express')


const hbs = require('express-handlebars')




const app = express()

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')





// pug view engine and views

app.engine('handlebars',hbs.engine(
    {
        defaultLayout:'main',
        layoutsDir:'methodview/layout',
        extname:'handlebars'
    
    }
))

app.set('view engine','handlebars')
app.set('views','methodview')

//  serving static files using express


// css file server for making all files inside public directory accessible (data encapsulation)
app.use(express.static(require.main.path+'/public'))

// parser for data
app.use(bodyParser.urlencoded({extended:false}))

// limiting middleware execution to only post requests

app.use('/admin',adminRoutes.router)


// app.use('/') will run always a url starts with / 

app.use(shopRoutes)




// app.use('/',(req,res,next)=>{
//     res.render('error')
// })
// const server = http.createServer(app)
// server.listen(4500)  two lines are replaced ->  by
app.use('/',(req,res)=>{
    res.render('error')
})






app.listen(4500)

// console.log(require.main.filename)
