const express = require('express')
const router = express.Router()
const shopController = require('../controllers/controlshop')



// router.get('/', shopController.getShopProducts)
// router.get('/product', shopController.getShopProducts)
// router.get('/cart', shopController.getShopProducts)


router.get('/', shopController.getIndex);

router.get('/products', shopController.getProducts);

router.get('/cart', shopController.getCart);

router.get('/orders', shopController.getOrders);

router.get('/checkout', shopController.getCheckout);

// router.get('/products/delete',handler) -----------> this will work YYY

router.post('/products/:productId', shopController.getDetails) // position matters

// router.get('/products/delete',handler) ------------> this wont XXX





module.exports = router