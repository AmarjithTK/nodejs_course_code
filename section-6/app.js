const bodyParser = require('body-parser')

const express = require('express')
const app = express()

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')

app.set('view engine','ejs')
app.set('views','methodview')


app.use(bodyParser.urlencoded({extended:false}))


app.use('/admin',adminRoutes)
app.use(shopRoutes)


app.listen(4500)

console.log(require.main.filename,require.main.path)
