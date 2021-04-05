// default get

//const { db } = require('../../models');
const router = require('./users');
const controller = require('../../controllers/usersController');

router
  .get('/', controller.create)
  .post(controller.create)
  .put(controller.update)
  .delete(controller.remove);

// router.get('/', async (req, res) => {
//   controller.findAll;
//   try {
//     const users = await User.find();
//     res.json(users);
//   } catch (err) {
//     res.status(500).json({ messagee: err.message });
//   }
// });

// router.post('/', async (req, res) => {
//   const user = new User({ ...req.body });
//   // role: req.body.role,
//   // username: req.body.username,
//   // firstName: req.body.firstName,
//   // firstLast: req.body.firstLast,
//   // password: req.body.password,
//   // email: req.body.email,
//   // provider: req.body.provider,
//   // merchant: req.body.merchant,
//   // phoneNumber: req.body.phoneNumber,
//   // googleID: req.body.googleID,
//   // facebookID: req.body.facebookID,
//   //});
//   try {
//     const newUser = await user.save();
//     res.status(201).json({ newUser });
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// });

// router.put('/', async (req, res) => {
//   const user = new User({ ...req.body });
//   // role: req.body.role,
//   // username: req.body.username,
//   // firstName: req.body.firstName,
//   // firstLast: req.body.firstLast,
//   // password: req.body.password,
//   // email: req.body.email,
//   // provider: req.body.provider,
//   // merchant: req.body.merchant,
//   // phoneNumber: req.body.phoneNumber,
//   // googleID: req.body.googleID,
//   // facebookID: req.body.facebookID,
//   //});
//   try {
//     const newUser = await db.User.findByIdAndUpdate(req.body, {
//       name: req.body,
//     });
//     res.status(201).json({ newUser });
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// });

// router.delete('/', async (req, res) => {
//   const user = new User({ ...req.body });
//   // role: req.body.role,
//   // username: req.body.username,
//   // firstName: req.body.firstName,
//   // firstLast: req.body.firstLast,
//   // password: req.body.password,
//   // email: req.body.email,
//   // provider: req.body.provider,
//   // merchant: req.body.merchant,
//   // phoneNumber: req.body.phoneNumber,
//   // googleID: req.body.googleID,
//   // facebookID: req.body.facebookID,
//   //});
//   try {
//     const newUser = await db.User.remove(req.body.ID, {
//       name: req.body,
//     });
//     res.status(201).json({ newUser });
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// });

module.exports = router;
