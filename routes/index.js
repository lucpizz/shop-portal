const path = require('path');
const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use(function (_req, res) {
  res.sendFile(path.join(__dirname, '../client/build/justin.html'));
});

module.exports = router;
