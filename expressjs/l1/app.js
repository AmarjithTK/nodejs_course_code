const bodyParser = require('body-parser')
const express = require('express')

const app = express()

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shops')



app.use(bodyParser.urlencoded({extended:false}))


// limiting middleware execution to only post requests

app.use(adminRoutes)

// app.use('/') will run always a url starts with / 

app.use(shopRoutes)


// const server = http.createServer(app)
// server.listen(4500)  two lines are replaced ->  by


app.listen(4500)



