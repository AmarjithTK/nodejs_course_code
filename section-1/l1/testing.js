const https = require('http')
const fs =require('fs')



const server = https.createServer((req,res)=> {
    

    const url = req.url
    const method =  req.method

    if(req.url === '/'){
        res.write('html')
        return res.end()
    }

    if(req.url == '/message' && req.method === 'POST'){
        
        const data = []

        req.on('data',(piece)=>{
            data.push(piece)
        })

        return req.on('end',()=>{
            const databuffered = Buffer.concat(data).toString()
            fs.writeFile('data.txt',databuffered,(err)=> {
                
                res.statuscode = 302
                
                res.setHeader('Location','/')
                return res.end()
            })
        })

        res.write('fallback html')
        res.end()
    }






})