var express = require('express')
var db = require('../models')
var router = express.Router()
// var dateHelper = require('../helpers/date')

function cekrole() {
  if (req.session.hasOwnProperty('user')) {
    var role = req.session.user.role
    if (role != 'boss') {
      res.redirect(`/${role}`)
    }
  } else {
    res.redirect('/login')
  }
}

router.get('/',(req,res) => {
  if (req.session.hasOwnProperty('user')) {
    var role = req.session.user.role
    if (role != 'boss') {
      res.redirect(`/${role}`)
    }
  } else {
    res.redirect('/login')
  }

  db.Department.findAll({
    include : [{
      model: db.Task
    }]
  })
  .then(_bossTodos => {
    res.render(`${role}/index`,{bossTodos : _bossTodos})
  })
})

router.get('/search', (req,res) => {
  if (req.session.hasOwnProperty('user')) {
    var role = req.session.user.role
    if (role != 'boss') {
      res.redirect(`/${role}`)
    }
  } else {
    res.redirect('/login')
  }

  let search = req.query
  res.json(search)
})

router.get('/create', (req,res) => {
  if (req.session.hasOwnProperty('user')) {
    var role = req.session.user.role
    if (role != 'boss') {
      res.redirect(`/${role}`)
    }
  } else {
    res.redirect('/login')
  }

  db.Department.findAll()
  .then( _depts => {
    res.render(`${role}/create`, {depts:_depts})
  })
})

router.post('/create', (req,res) => {
  if (req.session.hasOwnProperty('user')) {
    var role = req.session.user.role
    if (role != 'boss') {
      res.redirect(`/${role}`)
    }
  } else {
    res.redirect('/login')
  }

  let deptID = req.body.department
  let _task = req.body.task
  let _deadline = req.body.deadline
  db.Department.findById(deptID)
  .then(dept => {
    db.Task.create({task:_task, deadline:_deadline, DepartmentId:dept.id})
    .then(() => {
      res.redirect(`/${role}`)
    })
    .catch(err => {
      console.log(err);
    })
  })
})

router.get('/edit/:id',(req,res) => {
  if (req.session.hasOwnProperty('user')) {
    var role = req.session.user.role
    if (role != 'boss') {
      res.redirect(`/${role}`)
    }
  } else {
    res.redirect('/login')
  }

  let _id = req.params.id
  let _user;
  db.Department.findAll(
    {
    include : [{
      model: db.Task,
      where : {id : _id},
      required : false
    }]
  }
).then(_depts => {
    _depts.forEach(dept => {
      if (dept.Task.length != 0) {
        selectedDept = dept
      }
    })
    res.render(`${role}/edit`, {depts: _depts, dept: selectedDept})
  })
})

router.post('/edit/:id', (req,res) => {
  if (req.session.hasOwnProperty('user')) {
    var role = req.session.user.role
    if (role != 'boss') {
      res.redirect(`/${role}`)
    }
  } else {
    res.redirect('/login')
  }

  let id = req.params.id
  let task = req.body.task
  let deadline = req.body.deadline
  let is_complete = req.body.status
  let deptID = req.body.department

  db.Task.update(
    {
      title : task,
      is_complete : is_complete,
      deadline: deadline,
      department : deptID
    },
    {
      where:{id:_id}
    }
  )
  .then(task => {
    res.redirect(`/${role}`)
  })
  .catch(err => {
    res.render(`${role}/edit`, {err : err.message})
  })
})


router.get('/delete/:id', (req,res) => {
  if (req.session.hasOwnProperty('user')) {
    var role = req.session.user.role
    if (role != 'boss') {
      res.redirect(`/${role}`)
    }
  } else {
    res.redirect('/login')
  }

  let _id = req.params.id
  db.Task.destroy({
    where : {id:_id}
  })
  .then(() => {
    res.redirect(`/${role}`)
  })
  .catch((err) => {
    res.json(err)
  })
})



module.exports = router
