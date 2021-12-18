const fs = require('fs')
const path = require('path')


const p = path.join(require.main.path, 'files', 'data.json')

const getFileData = cb => {

    fs.readFile(p, (err, Filedata) => {
        let products = [];

        if (!err && Filedata.length > 0) {
            products = JSON.parse(Filedata) 
            return cb(products)// this will add existing content to products
        }


        cb(products)


    })

}


module.exports = class Product {


    constructor(t) {
        this.title = t
    }



    save() {



        getFileData((products)=>{
            products.push(this) 

            fs.writeFile(p, JSON.stringify(products), (err) => {
                        console.log(err)
             })
        })


    }


    // I feel  like static is similar keyword to --> @classmethod in python
    static fetchAll(cb) {

        getFileData(cb);

    }


}