
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { name:'R.Keerthana',
  email:'keetna254@gmail.com',
  contact:'9150119837',
  fathersName:'N.Raj Kumar',
  dob:'25.04.2001',
  age:'21',
  bloodgroup:'B+ve'
});
  });  


module.exports = router;

