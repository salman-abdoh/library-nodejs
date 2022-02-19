var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('index', { title: 'home' });
});
router.get('/index', function(req, res, next) {
  res.render('index', { title: 'detail' });
});
router.get('/detail', function(req, res, next) {
  res.render('detail', { title: 'detail' });
});
router.get('/category', function(req, res, next) {
  res.render('category', { title: 'category' });
});
router.get('/checkout', function(req, res, next) {
  res.render('checkout', { title: 'category' });
});


module.exports = router;
