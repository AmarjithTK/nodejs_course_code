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

        const oldCart = fs.readFile(p, (err, Filedata) => {

            let cart = {
                itemcart: [],
                totalPrice: 0
            }

            if (!err) {

                try {

                    const file = JSON.parse(Filedata)
                    cart = file

                    const existingProductIndex = cart.itemcart.findIndex(elem => elem.id == id)
                    const existingProduct = cart.itemcart[existingProductIndex]

                } catch (e) {
                    console.log(e);
                }




                let updatedProduct;
                if (existingProduct) {
                    updatedProduct = {
                        ...existingProduct
                    }
                    updatedProduct.count += 1
                    cart.itemcart[existingProductIndex] = updatedProduct
                } else {
                    updatedProduct = {
                        id: id,
                        count: 1,
                        price: price
                    }
                    cart.itemcart.push(updatedProduct)
                    // cart has more products than 


                }
                cart.totalPrice += updatedProduct.price


                fs.writeFile(p, cart, (err) => {
                    console.log(err);
                })

            }

            // this line is equal to
            // elem => return elem if elem.id == id
            // const existingProduct = cart.itemcart.find(elem => elem.id == id)


            // itemcart.totalPrice += price

        })







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