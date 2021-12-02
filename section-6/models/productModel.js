const fs = require('fs')
const path = require('path')



module.exports = class Product {


    constructor(t){
        this.title = t
    }

     static getPath(){
         return path.join(require.main.path,'data','product.json')
     }

    save(){

    fs.readFile(Product.getPath(),(err,Filedata)=>{
        let products = [];

        if(!err){
            products = JSON.parse(Filedata) // this will add existing content to products
        }

        products.push(this) // only new content to products

        fs.writeFile(Product.getPath(),JSON.stringify(products),(err) =>{
            console.log(err)
        })

    })


    }


    // I feel  like static is similar keyword to --> @classmethod in python
    static fetchAll(cb){
        fs.readFile(Product.getPath(),(err,filedata) =>{

            if(err){
                return cb([]);
            }

            const products = JSON.parse(filedata)
            return cb(products)

        })
    }


}