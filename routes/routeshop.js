const express = require('express')
const router = express.Router()
const shopController = require('../controllers/controlshop')



router.get('/',shopController.getShopProducts)
router.get('/product',shopController.getShopProducts)
router.get('/cart',shopController.getShopProducts)







module.exports = router
