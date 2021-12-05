const express = require('express')

const bodyparser = require('body-parser')

const add = require('./routes/add')
const view = require('./routes/view')

const err = require('./routes/404')

const handlebar =  require('express-handlebars')

const app = express()

app.set('view engine','pug')
app.set('views','views')


app.use(bodyparser.urlencoded({extended:false}))

app.use(add.addRouter)
app.use(view.viewRouter)
app.use(err.errorRouter)



app.listen(5000)