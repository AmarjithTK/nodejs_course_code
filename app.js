// const bodyParser = require('body-parser')
// obsolete from express 4

const express = require('express')
const app = express()

const adminRoutes = require('./routes/routeadmin')
const shopRoutes = require('./routes/routeshop')

const errorController =  require('./controllers/controlerror')



app.set('view engine','ejs')
app.set('views','views')


// app.use(bodyParser.urlencoded({extended:false})) express now has its own version , no need for external body parsers
app.use(express.urlencoded())


app.use('/admin',adminRoutes)
app.use(shopRoutes)
/* (req,res,next)=> {


    next() ??
    when really needed right?

    next()

    app.use((req,res)=>{
        console.log('This is continuation from the last route')
    })

        // request handler
        // response sender // both became too big to handle

        look below



*/

/*

((req,res,next)=> {
    if(req.body.title == 'HomePage'){
        next() ____________________> possible use
    }
})

((req,res)=> {
    console.log('Coming from Homepage')
    res.write('<h1>Home page is really cool</h1>')
})



*/ 


app.use('/',errorController.errorPage)

app.use(express.static('public'))

app.listen(4500)

// console.log(require.main.filename,require.main.path)

