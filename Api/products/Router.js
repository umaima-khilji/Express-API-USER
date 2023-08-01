const express = require('express')
const router = express.Router()
const {getAllProducts, addProducts} =require('./Controller')


//getAppProducts
router.get('/products', getAllProducts)


//addProducts
router.post('/addproduct', addProducts)


module.exports = router
