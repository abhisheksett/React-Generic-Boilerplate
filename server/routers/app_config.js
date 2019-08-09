const router = require('express').Router();
const appConfigGet = require('../mocks/app_config/get.json');

router.get('/', (req, res) => {
  res.send(200, JSON.stringify(appConfigGet));
});

module.exports = router;
