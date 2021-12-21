// how cart model is different from product model

// because product will created frequently but there is only one cart


// cart requires no constructor as it gets add cart and remove cart very frequently

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
                itemcart: [],
                totalPrice: 0
            }

            let updatedProduct
            let existingProduct
            let existingProductIndex

            try {

                const jsondata = JSON.parse(file)
                console.log(jsondata, typeof(jsondata), 'This is Json data');
                if (jsondata.toString() != '{}' && jsondata.toString() != '') {
                    console.log(jsondata);
                    cart = jsondata

                    existingProductIndex = cart.itemcart.findIndex(elem => elem.uuid == id)
                    existingProduct = cart.itemcart[existingProductIndex]

                    updatedProduct = {
                        ...existingProduct
                    }
                    updatedProduct.count += 1
                    cart.itemcart[existingProductIndex] = updatedProduct

                } else
                    throw error

            } catch (e) {

                updatedProduct = {
                    uuid: id,
                    count: 1,
                    price: price
                }

                cart.itemcart.push(updatedProduct)

            }

            cart.totalPrice += price

            console.log(cart);
            fs.writeFile(p, JSON.stringify(cart), (err) => {
                console.log('Error from file writing', err);
            })





        })




        // const existingData = fs.readFile(p, (err, file) => {


        //     // return JSON.parse(file)
        //     let parseError
        //     try {

        //         // parse "" unexpected 
        //         // parse "{}"
        //         jsondata = JSON.parse(file)
        //         if (jsondata != "" && jsondata != "{}") {
        //             parseError = false
        //         }

        //     } catch (error) {
        //         parseError = true
        //     }

        //     if(!parseError){




        //     }









        // })



        // let cart = {
        //     itemcart: [],
        //     totalPrice: 0
        // }

        // let oldProductIndex
        // let oldProduct
        // let updatedProduct
        // if (existingData != null) {

        //     cart = existingData

        //     oldProductIndex = cart.itemcart.findIndex(elem => elem.id == id)
        //     oldProduct = cart.itemcart[oldProductIndex]

        //     updatedProduct = {
        //         ...oldProduct
        //     }
        //     updatedProduct.count += 1
        //     cart.itemcart[oldProductIndex] = updatedProduct

        // } else {
        //     updatedProduct = {
        //         id: id,
        //         count: 1,
        //         price
        //     }

        //     cart.itemcart.push(updatedProduct)

        // }


        // cart.totalPrice += price


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






        // */


        // const jsonstring = JSON.stringify(cart)

        // fs.writeFile(p, jsonstring, (err) => {
        //     console.log(err);
        // })



        // console.log(existingData)






        // const oldCart = fs.readFile(p, (err, Filedata) => {

        //     let cart = {
        //         itemcart: [],
        //         totalPrice: 0
        //     }

        //     let existingProductIndex
        //     let existingProduct

        //     if (!err) {

        //         try {

        //             const file = JSON.parse(Filedata)
        //             cart = file
        //             existingProductIndex = cart.itemcart.findIndex(elem => elem.id == id)
        //             existingProduct = cart.itemcart[existingProductIndex]


        //         } catch (e) {
        //             console.log(e);
        //         }

        //     }

        //     // this line is equal to
        //     // elem => return elem if elem.id == id
        //     // const existingProduct = cart.itemcart.find(elem => elem.id == id)



        //     let updatedProduct;
        //     if (existingProduct) {
        //         updatedProduct = {
        //             ...existingProduct
        //         }
        //         updatedProduct.count += 1
        //         cart.itemcart[existingProductIndex] = updatedProduct
        //     } else {
        //         updatedProduct = {
        //             id: id,
        //             count: 1,
        //             price: price
        //         }
        //         cart.itemcart.push(updatedProduct)
        //         // cart has more products than 


        //     }
        //     cart.totalPrice += updatedProduct.price


        //     fs.writeFile(p, cart, (err) => {
        //         console.log(err);
        //     })

        //     // itemcart.totalPrice += price

        // })







        // fetch older cart
        // find if the product already exists

        // if it then don't create
        // else create a new product list

    }





}

// cart has what ?

/*


product name , price , count

const cart = {products:[],totalprice:0}


productnew = {product.name,product.price,product.count}

price = products.reduce(start,elem=>{
    start += elem.price * elem.count
},0)


const cart = 



*/