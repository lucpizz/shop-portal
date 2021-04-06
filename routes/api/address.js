const router = require('express').Router();
const addressController = require('../../controllers/addressController.js');

// Matches with "/api/users"
router.route('/').get(addressController.findAll).post(addressController.create);

// Matches with "/api/users/:id"
router
  .route('/:id')
  .get(addressController.findById)
  .put(addressController.update)
  .delete(addressController.remove);

module.exports = router;
