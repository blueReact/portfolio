const express = require('express');
const router = express.Router();

router.get('/get', function (req, res) {
  console.log('running express');
  res.send('whatev');
});

module.exports = router
