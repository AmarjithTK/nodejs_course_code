// how cart model is different from producart model

// because producart will created frequently but there is only one cart


// cart requires no construcartor as it gets add cart and remove cart very frequently

const {
    json
} = require('body-parser')
const fs = require('fs')
const path = require('path')

const p = path.join(require.main.path + '/files/cart.json')





module.exports = class Cart {


    static addProduct(id, price) {


        fs.readFile(p, (error, file) => {

            let cart = {
                products: [],
                totalPrice: 0
            }

            try {
                const jsondata = JSON.parse(file)
                cart = jsondata
            } catch (er) {
                console.log('The error comes from try catch block of fs readfile ', er)
            }
            let updatedproduct
            let existingprodindex = cart.products.findIndex(val => val.uuid == id)
            let existingprod = cart.products[existingprodindex]

            if (existingprod) {
                // cart.totalPrice !=0 does not mean existingproducart is the same as the incoming


                updatedproduct = {
                    ...existingprod
                }
                updatedproduct.count += 1

                cart.products = [
                    ...cart.products
                ]

                cart.products[existingprodindex] = updatedproduct


            } else {
                updatedproduct = {
                    uuid: id,
                    count: 1,
                    price: price
                }


                cart.products = [...cart.products, updatedproduct]
            }

            cart.totalPrice += +price
            console.log(cart.totalPrice)

            fs.writeFile(p, JSON.stringify(cart), (err) => {})

        })



        // // json stringify dont convert it into string , 

        // /*

        //         {
        //             title:'imagine dragons',
        //             price:124,
        //             author:'amar agrawal',
        //             released:"27 may"
        //         }

        //         to Json.stringify()

        //         {
        //             "title":"imagine dragons",
        //             "price":124
        //             "author":"amar agrawal",
        //             "released":"27 may"
        //         }

        //         to Json.parse() does reverse


    }

    static fetchuuid() {
        return new Promise((resolve, reject) => {


            fs.readFile(p, (err, file) => {
                if (!err) {

                    const cart = JSON.parse(file)
                    const files = cart.products.map(elem => elem.uuid)
                    console.log(files, 'this is here --------------------------------------');
                    return resolve(cart.products.map(elem => elem.uuid))


                } else reject(err)
            })

        })


    }


    static deleteitem(id) {
        fs.readFile(p, (err, file) => {

            if (!err) {


                let cartdata = JSON.parse(file)

                let remproduct = cartdata.products.findIndex(elem => elem.uuid == id)

                const remprice = remproduct.count * remproduct.price

                const updatedproductlist = cartdata.products.filter(elem => elem.uuid != id)
                const updatedCart = {
                    products: [...updatedproductlist],
                    totalPrice: cartdata.totalPrice - remprice
                }

                fs.writeFile(p, JSON.stringify(updatedCart), (err) => {})

                /* 
                
                    {products:[{},{},{}],totalprice}


                
                */


            }


        })

    }


    static deleteall() {
        // fs.writeFile(p)
        fs.unlink(p, (err) => {})
    }








}

// cart has what ?

/*


producart name , price , count

const cart = {products:[],totalPrice:0}


producartnew = {producart.name,producart.price,producart.count}

price = products.reduce(start,elem=>{
    start += elem.price * elem.count
},0)


const cart = 



*/