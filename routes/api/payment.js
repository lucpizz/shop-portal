const router = require('express').Router();
//require('dotenv').config();
//const stripe = require('stripe')(process.env.SECRET_KEY);
const paymentController = require('../../controllers/paymentController');

// Matches with "/api/payment"
router.route('/').post(paymentController.purchase);

// router.route('/').get(paymentController.get);

module.exports = router;
