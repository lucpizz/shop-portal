const router = require('express').Router();
const userRoutes = require('./userModel');
const addressRoutes = require('./addressModel');
const productRoutes = require('./productModel');
const categoryRoutes = require('./categoryModel');
const cartRoutes = require('./cartModel');
const brandRoutes = require('./brandModel');
const contactRoutes = require('./contactModel');
const merchantRoutes = require('./merchantModel');
const orderRoutes = require('./orderModel');

// Post Routes
router.use('/user', userRoutes);
router.use('/address', addressRoutes);
router.use('/product', productRoutes);
router.use('/category', categoryRoutes);
router.use('/cart', cartRoutes);
router.use('/brand', brandRoutes);
router.use('/contact', contactRoutes);
router.use('/merchant', merchantRoutes);
router.use('/order', orderRoutes);

module.exports = router;
