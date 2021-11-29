// var server = require('http')



const http = require('http')
const fs = require('fs')


// res.write()
// res.write()
// res.write()
// res.end()

const server = http.createServer((req,res) =>{
    const method = req.method
    const url = req.url

    if(url === '/'){
        res.write('<html><head><title>this is first page</title></head><body style = "background-color:red;">happy world, Prosperous world<form action="/message" method="POST"><input type ="text" name="samplejs"><button type="submit" class="btn">summit boy</button></form></body></html>')
        return res.end() // this will quit function here
    }


    // redirecting requests to file

    if(url === '/message' && method ==='POST'){
        // fs.writeFileSync('message.txt','fluffy is happy') // write file sync is an synchronous func
        // as a node dev u should prefer async over sync
        const datapieces = []

        req.on('data',(datapiece)=>{
            datapieces.push(datapiece)
        })

        return req.on('end',()=>{
            console.log(datapieces,'\n ----------------------\n',Buffer.concat(datapieces),'\n--------------------\n')
            const combinedata= Buffer.concat(datapieces).toString()

            // Buffer.concat(body).toString() --> Another level of  string method
            //  Buffer.concat ==== will return this ----> <Buffer 73 61 6d 70 6c 65 6a 73 3d 68 65 70 61 74 69 74 69 73 2b 76 61 63 63 69 6e 65> 
            // converted that to string

            /// if i wher to convert int --> string , i would use toString()
            /// int x= 5
            /// stringx = x.toString()
            ///
            console.log('this is combinedata',combinedata)
            const keyvalpair = combinedata.split('&')[0]
            console.log(keyvalpair)
            // console.log(typeof(keyvalpair),keyvalpair)
            fs.appendFile('message.txt',keyvalpair,(ee)=>{

                res.statusCode = 302
                res.setHeader('Location','/')
                return res.end()

            })
            // statuscode 302 used to redirect by saying page not found
        })

        // async dont block the execution of below block    
        
    }

    // no longer goes to here !!! that was wrong. These are async func , never goes 
    // after registering event listeners .... as async func
    
    // program execution goes to bottom.......
    res.setHeader('Content-Type','text/html')  

    // res.setHeader('Content-Type','text/html')  move this to top
    res.write('<html><head><title>this is first page</title></head><body style = "background-color:red;">happy world, Prosperous world</body></html>')
    res.end()
    // process.exit()

})


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