const router = require('express').Router();

router.get('/', (req, res) => {
  res.send('Test API GET');
});

module.exports = router;
