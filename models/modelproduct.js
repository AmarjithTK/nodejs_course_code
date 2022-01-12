const fs = require('fs')
// const path = require('path')
// require.main.path is already there in new version o fthe node
const uuid = require('uuid')


// callback to promise

const p = path.join(require.main.path, 'files', 'data.json')

const getFileData = () => {

    return new Promise((resolve, reject) => {


        fs.readFile(p, (err, Filedata) => {
            let products = [];

            if (!err && Filedata.length > 0) {
                products = JSON.parse(Filedata)
                return resolve(products) // this will add existing content to products
            }


            return resolve(products)


        })

    })

    // fs.readFile(p, (err, Filedata) => {
    //     let products = [];

    //     if (!err && Filedata.length > 0) {
    //         products = JSON.parse(Filedata)
    //         return cb(products) // this will add existing content to products
    //     }


    //     cb(products)


    // })

}


module.exports = class ProductClass {


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


        console.log(this, 'this is this');

        // getFileData((products) => {

        // })

        getFileData().then(products => {

            products.push(this)

            console.log(this);
            fs.writeFile(p, JSON.stringify(products), (err) => {
                console.log(err)
            })

        }).catch(err => console.log(err))



    }

    static saveModified({
        title,
        price,
        uuid,
        imageurl,
        description
    }) {


        // see for the instructors' method TODO


        getFileData().then((filedata) => {

            let updatedData = [...filedata]

            const prodIndex = updatedData.findIndex(elem => elem.uuid == uuid)
            let prodUpdated = {
                title,
                uuid,
                imageurl,
                description,
                price
            }

            console.log(prodIndex)

            updatedData[prodIndex] = prodUpdated

            fs.writeFile(p, JSON.stringify(updatedData), (err) => {

            })


        })

    }

    static remove(id) {

        getFileData().then(filedata => {
            const updatedProducts = filedata.filter(elem => elem.uuid != id)
            fs.writeFile(p, JSON.stringify(updatedProducts), (err) => {
                // console.log(err)
            })

        })

    }


    // I feel  like static is similar keyword to --> @classmethod in python
    static fetchAll() {

        return getFileData();

        //// fetchall is redundatn but getfiledata is not a global function of the class

    }

    static findProductById(id) {
        return new Promise((resolve, reject) => {


            getFileData().then(productdata => {
                productdata.forEach(element => {
                    if (element.uuid === id) {
                        return resolve(element)
                    }
                });
            }).catch(err => reject(err))


        })
    }


}