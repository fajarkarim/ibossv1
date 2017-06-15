var express = require('express');
var router = express.Router();
var db = require('../models')

/* GET home page. */
// router.get('/',function(req,res,next){
//   db.Department.findAll()
//   .then( (departments)=>{
//     res.render('index', {departments : departments})
//   })
// })
//
//
//
//
// //create task render ke create.ejs
// router.get('/add', function(req,res,next){
//   db.Department.findAll()
//   .then( (departments)=>{
//      res.render('create')
//      //res.json(departments)
//   })
// });
//
//
// //untuk Post setelah create
// router.post('/add', (req, res, next) => {
//   let task = req.body.task
//   let month = req.body.bulan
//   let dept = req.body.department_id
//   db.Department.findOne({
//     where:{
//       name: dept
//     }
//   }).then((department) => {
//     console.log(department);
//     db.Task.create({
//       name: task,
//       deadline: month,
//       completed: false,
//       DepartmentId: departemen_id
//       })
//   })
//   .then(() => {
//     res.redirect('/');
//   })
// })
//
//
//
//
//
// router.post('/update/:id', function(req,res,next){
//   let id = req.params.id;
//   let update = req.body.task;
//   db.Task.findOne({
//     where : {
//       id: id
//     }
//   })
//   .then( (tasks)=>{
//     tasks.update({
//       name : ubah
//     })
//   })
// })
//
// //Delete tasks redirect ke index
// router.get('/delete/:id', function(req,res,next){
//   let id = req.params.id;
//   db.Task.destroy({
//     where : {
//       id : id
//     }
//   })
//   .then( (tasks)=>{
//     res.redirect('/')
//   })
// })

//menampilkan semua data task dan Department
router.get('/show', (req,res,next)=>{
  db.Task.findAll({ include: {model: db.Department } })
  .then(tasks => {
    res.send(tasks)
  })
})

//menampilkan data Department
router.get('/tasks',(req,res,next)=>{
  db.Department.findAll()
  .then( (tasks)=>{
    res.send(tasks)
  })
})

//menampilkan data Task
router.get('/departments',function(res,res,next){
  db.Task.findAll()
  .then( (dept)=>{
    res.send(dept);
  })
})

//menampilkan semua data
router.get('/showLagi', (req,res,next)=>{
    db.Department.findAll({ include : {model : db.Task}})
    .then( (dept)=>{
      res.send(dept)
    })
})

//menampilkan  task pada Tabel task
router.get('/taskDept', (req,res,next)=>{
  db.Task.findAll( {
    attributes : ['task']
  })
  .then((task)=>{
    res.send(task)
  })
})

//menampilkan department task pada Tabel Task
router.get('/taskName', (req,res,next)=>{
  db.Task.findAll({ include : {model : db.Department, attributes : ['name']}
  })
  .then((completed)=>{
    res.send(completed)
  })
})

router.get('/search', (req,res,next)=>{
  let task = req.body.task
  db.Task.findOne({
    where : {
      task : 'Belajar',
      like : 'Belajar'
    }
  })
  .then( (search)=>{
    res.send(search)
  })
})

router.get('/addDepartment', (req,res,next)=>{

  let name = req.body.name;
  db.Department.create({
    where : {
      name : 'Staff'
    }
  })
  .then((create)=>{
    res.send(create)
  })
})






module.exports = router;
