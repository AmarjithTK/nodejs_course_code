const bodyParser = require('body-parser')

const express = require('express')
const app = express()

const adminRoutes = require('./routes/routeadmin')
const shopRoutes = require('./routes/routeshop')

const errorController =  require('./controllers/controlerror')



app.set('view engine','ejs')
app.set('views','views')


app.use(bodyParser.urlencoded({extended:false}))


app.use('/admin',adminRoutes)
app.use(shopRoutes)
app.use('/',errorController.errorPage)

app.listen(4500)

console.log(require.main.filename,require.main.path)

