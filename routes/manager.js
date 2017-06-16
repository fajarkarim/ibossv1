var express = require('express')
var db = require('../models')
var router = express.Router()
var dateHelper = require('../helpers/date')


router.get('/',(req,res) => {
  let email = req.session.user.email
  // res.json(email)
  if (req.session.hasOwnProperty('user')) {
    var role = req.session.user.role
    if (role != 'manager') {
      res.redirect(`/${role}`)
    }
  } else {
    res.redirect('/login')
  }

  res.locals.helpers = dateHelper
  //
  db.Department.findAll({
    where : {
      email : email
    },
    include : [{
      model: db.Task
    }]
  })
  .then(_Todos => {
    res.render(`${role}/index`,{deptTodos : _Todos})
    // res.json(_Todos)
  })
})

module.exports = router
