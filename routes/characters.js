var express = require('express');
var router = express.Router();

var knex = require('knex')({
    client: 'pg',
    connection: process.env.DATABASE_URL
  });
  
function characters() {
  return knex('characters');
}


router.get('/characters', function(req, res) {
  characters().select().then(function(results){
    res.render('characters/index', {characters: results});
  });
});

module.exports = router;
