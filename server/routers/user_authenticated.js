const router = require('express').Router();
const userAuthenticatedGet = require('../mocks/user_authenticated/get.json');

router.get('/', (req, res) => {
  res.send(200, JSON.stringify(userAuthenticatedGet));
});

module.exports = router;
