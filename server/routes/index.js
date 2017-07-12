var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.status(200).json({
      home: 'home'
  });
});

router.get('/about', function(req, res) {
  res.status(200).json({
      about: 'about'
  });
});

module.exports = router;