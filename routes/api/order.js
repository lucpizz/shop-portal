const router = require('express').Router();
const orderController = require('../../controllers/orderController.js');

// Matches with "/api/users"
router.route('/').get(orderController.findAll).post(orderController.create);

// Matches with "/api/users/:id"
router
  .route('/:id')
  .get(orderController.findById)
  .put(orderController.update)
  .delete(orderController.remove);

module.exports = router;
