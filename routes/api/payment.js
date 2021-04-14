const router = require('express').Router();
//require('dotenv').config();
//const stripe = require('stripe')(process.env.SECRET_KEY);
const paymentController = require('../../controllers/paymentController');

// Matches with "/api/product"
router.route('/').post(paymentController.purchase);


module.exports = router;
