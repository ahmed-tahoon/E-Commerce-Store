
const router = require('express').Router();
const userRoutes = require('./api/user')
const auth = require('./api/auth')
const merchant = require('./api/merchant')
const brand = require('./api/brand')
const cart = require('./api/cart')
const product = require('./api/product')
const address = require('./api/address')
const category = require('./api/category')
const order = require('./api/order')

// api routes
router.use('/api/user', userRoutes);
router.use('/api/auth', auth);
router.use('/api/merchant', merchant);
router.use('/api/brand', brand);
router.use('/api/cart',cart)
router.use('/api/product',product)
router.use('/api/address',address)
router.use('/api/category',category);
router.use('/api/order',order)




module.exports = router;