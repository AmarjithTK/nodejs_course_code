// var server = require('http')



const http = require('http')
const handlerModule = require('./handler')

// res.write()
// res.write()
// res.write()
// res.end()

const server = http.createServer(handlerModule.handler)


//callback func are functions which you know, passed as an argument to another func in cpp

// in js , no passing as the argument is required



server.listen(5000);



// const Loguser =  {

//     // apiKey = '<a long api key>',

//     constructor(username,password){
//         this.username = username
//         this.password = password
//     },


//     dbAuth(){
//         console.log(`this works fine , User ${this.apiKey}`)
    

//     }

// }

// noobUser = Loguser('tester','longpassword')

// noobUser.dbAuth()