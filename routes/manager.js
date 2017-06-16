var express = require('express')
var db = require('../models')
var router = express.Router()

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
