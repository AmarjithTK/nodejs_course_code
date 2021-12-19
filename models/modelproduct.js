const fs = require('fs')
const path = require('path')

const uuid = require('uuid')


// callback to promise

const p = path.join(require.main.path, 'files', 'data.json')

const getFileData = cb => {

    return new Promise((resolve, reject) => {


        fs.readFile(p, (err, Filedata) => {
            let products = [];

            if (!err && Filedata.length > 0) {
                products = JSON.parse(Filedata)
                return resolve(products) // this will add existing content to products
            }


            resolve(products)


        })

    })

    fs.readFile(p, (err, Filedata) => {
        let products = [];

        if (!err && Filedata.length > 0) {
            products = JSON.parse(Filedata)
            return cb(products) // this will add existing content to products
        }


        cb(products)


    })

}


module.exports = class Product {


    constructor({
        title,
        price,
        imageurl,
        description
    }) {

        this.title = title
        this.price = price
        this.imageurl = imageurl
        this.description = description
    }



    save() {

        this.uuid = uuid.v1()

        getFileData((products) => {
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