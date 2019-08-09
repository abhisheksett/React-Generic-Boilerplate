const router = require('express').Router();
const loginGet = require('../mocks/login/get.json');
const loginPost = require('../mocks/login/post.json');

router.get('/', (req, res) => {
  res.send(JSON.stringify(loginGet));
});

router.post('/', (req, res) => {
  res.send(JSON.stringify(loginPost));
});

module.exports = router;
