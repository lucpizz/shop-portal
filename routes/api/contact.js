const router = require('express').Router();
const contactController = require('../../controllers/contactController.js');

// Matches with "/api/users"
router.route('/').get(contactController.findAll).post(contactController.create);

// Matches with "/api/users/:id"
router
  .route('/:id')
  .get(contactController.findById)
  .put(contactController.update)
  .delete(contactController.remove);

module.exports = router;
