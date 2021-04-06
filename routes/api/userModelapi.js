const router = require('./usersModel');
const controller = require('../../controllers/usersController');

router
  .get('/', controller.create)
  .post(controller.create)
  .put(controller.update)
  .delete(controller.remove);

module.exports = router;
