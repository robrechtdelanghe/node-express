var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'De Lijn - Auth0 demo',
    content: 'Zou wel handig zijn mocht dit werken'
  });
});

module.exports = router;
