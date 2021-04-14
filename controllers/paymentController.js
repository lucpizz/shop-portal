require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const calculateOrderAmount = () => {
    // Replace this constant with a calculation of the order's amount
    // Calculate the order total on the server to prevent
    // people from directly manipulating the amount on the client
    return 1400;
  };

// Defining methods for the postsController
module.exports = {
  purchase: function (req, res) {
    const { items } = req.body;
    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = stripe.paymentIntents.create({
      amount: calculateOrderAmount(items),
      currency: "usd"
    });
  res.send({
      clientSecret: paymentIntent.client_secret
    });;
  },

};

  
  
//   server.post("/payment", async (req, res) => {
//     const { items } = req.body;
//     // Create a PaymentIntent with the order amount and currency
//     const paymentIntent = await stripe.paymentIntents.create({
//       amount: calculateOrderAmount(items),
//       currency: "usd"
//     });
//   res.send({
//       clientSecret: paymentIntent.client_secret
//     });
//   });