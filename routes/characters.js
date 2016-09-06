var express = require('express');
var router = express.Router();


/* GET users listing. */
router.get('/characters', function(req, res, next) {
  res.render('characters/index');
});


module.exports = router;
