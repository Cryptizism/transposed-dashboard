export {};

const express = require('express');
var router = express.Router();
const path = require('path');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home page' });
});

module.exports = router;