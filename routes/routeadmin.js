const express = require('express')
const router = express.Router()
const adminController = require('../controllers/controladmin')


router.post('/add-product', adminController.postAddProduct)
router.get('/add-product', adminController.getAddProduct)
router.get('/products', adminController.getProductList)
router.use('/edit-product/:productId', adminController.getEditProduct)




module.exports = router