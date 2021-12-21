const express = require('express')
const router = express.Router()
const adminController = require('../controllers/controladmin')


router.post('/add-product', adminController.postAddProduct)
router.get('/add-product', adminController.getAddProduct)
router.get('/products', adminController.getProductList)
router.post('/edit-product/:productId', adminController.getEditProduct)
router.post('/edit-product', adminController.postEditProduct)
router.post('/delete-product/:productId', adminController.postDeleteProduct)






module.exports = router