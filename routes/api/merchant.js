const router = require('express').Router();
const mechantController = require('../../controllers/mechantController.js');

// Matches with "/api/users"
router.route('/').get(mechantController.findAll).post(mechantController.create);

// Matches with "/api/users/:id"
router
  .route('/:id')
  .get(mechantController.findById)
  .put(mechantController.update)
  .delete(mechantController.remove);

module.exports = router;
