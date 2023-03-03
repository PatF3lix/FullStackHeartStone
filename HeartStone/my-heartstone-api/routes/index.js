var express = require('express');
var router = express.Router();
const sql = require("../dbOperations");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// test connection
router.get('/testConnection', function (req, res, next) {
  sql.getCartes();
  res.render('index', { title: 'Express' });
});

module.exports = router;
