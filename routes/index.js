var express = require('express');
var router = express.Router();
const db = require('../models')

/* GET home page. */
router.get('/', function(req, res) {
  if (req.session.hasOwnProperty('user')) {
    let role = req.session.user.role
    res.redirect(`/${role}`)
  }
  res.redirect('/login');
});

router.get('/login', function (req,res) {
  if (req.session.hasOwnProperty('user')) {
    let role = req.session.user.role
    res.redirect(`/${role}`)
  }
  res.render('login')
})

router.post('/login', function (req,res) {
  if (req.session.hasOwnProperty('user')) {
    let role = req.session.user.role
    res.redirect(`/${role}`)
  }
  let _username = req.body.username
  let _password = req.body.password
  db.User.findOne({where : {
    username : _username,
    password : _password
  }})
  .then(user => {
    if (user) {
      req.session.user = {username : _username, role:user.role}
      res.redirect('/')
    } else {
      res.redirect('/login')
    }
  })
  .catch(err => {
    console.log(err);
  })
})

router.get('/logout', function (req,res) {
  if (req.session.hasOwnProperty('user')) {
    delete req.session.user
    res.redirect('/')
  }
  res.redirect('/login')
})


module.exports = router;
