const router = require('express').Router();
const userRoutes = require('./userModel');
const addressRoutes = require('./addressModel');

// Post Routes
router.use('/userModel', userRoutes);
router.use('/addressModel', addressRoutes);

module.exports = router;
