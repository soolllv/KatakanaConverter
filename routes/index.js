var express = require('express');
var router = express.Router();

const converter = require('../public/javascripts/convert');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Katakanize' });
});

router.post('/',(req,res) =>{
  const result = converter.doConvert(req.body.input);
  res.render('index', { title: 'Katakanize', result });
})

module.exports = router;
