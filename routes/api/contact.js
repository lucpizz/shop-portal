const router = require('express').Router();
const contactController = require('../../controllers/contactController.js');

// Matches with "/api/category"
router.route('/').get(contactController.findAll).post(contactController.create);

// Matches with "/api/category/:id"
router
  .route('/:id')
  .get(contactController.findById)
  .post(contactController.create)
  .put(contactController.update)
  .delete(contactController.remove);

// Matches with "/name:name"
router
  .route('/name/:name')
  .get(contactController.findByName)
  .post(contactController.create)
  .put(contactController.update)
  .delete(contactController.remove);

// Matches with "/name:name"
router
  .route('/email/:email')
  .get(contactController.findByEmail)
  .post(contactController.create)
  .put(contactController.update)
  .delete(contactController.remove);

module.exports = router;
