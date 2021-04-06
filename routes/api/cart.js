const router = require('express').Router();
const cartController = require('../../controllers/cartController.js');

// Matches with "/api/users"
router.route('/').get(cartController.findAll).post(cartController.create);

// Matches with "/api/users/:id"
router
  .route('/:id')
  .get(cartController.findById)
  .put(cartController.update)
  .delete(cartController.remove);

module.exports = router;
