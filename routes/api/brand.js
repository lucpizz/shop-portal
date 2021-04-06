const router = require('express').Router();
const brandController = require('../../controllers/brandController.js');

// Matches with "/api/products"
router.route('/').get(brandController.findAll).post(brandController.create);

// Matches with "/api/products/:id"
router
  .route('/:id')
  .get(brandController.findById)
  .put(brandController.update)
  .delete(brandController.remove);

module.exports = router;
