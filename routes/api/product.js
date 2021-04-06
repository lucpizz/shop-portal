const router = require('express').Router();
const productController = require('../../controllers/productController.js');

// Matches with "/api/users"
router.route('/').get(productController.findAll).post(productController.create);

// Matches with "/api/users/:id"
router
  .route('/:id')
  .get(usersController.findById)
  .put(usersController.update)
  .delete(usersController.remove);

// Matches with "/api/sku/:sku"
router
  .route('/sku/:sku')
  .get(usersController.findBySku)
  .put(usersController.update)
  .delete(usersController.remove);

  // Matches with "/api/name/:name"
router
  .route('/name/:name')
  .get(usersController.findByName)
  .put(usersController.update)
  .delete(usersController.remove);

module.exports = router;
