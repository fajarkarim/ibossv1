const db = require('./models');
const repl = require('repl')
let replServer = repl.start('>> ')


function search(taskName,deptName="none",orderBy="id") {
  if (deptName != "none") {
    searchTasksByDepartment(taskName,deptName,orderBy)
  } else {
    searchTasks(taskName,orderBy)
  }
}

function searchTasksByDepartment(taskName,deptName,orderBy) {
  db.Department.findAll({
    where : {
      name : `${deptName}`
    }
  })
  .then(depts => {
    depts.forEach(dept => {
      dept.getTasks({
        order : [[`${orderBy}`, 'DESC']],
        where : {
          task : {
            $like: `%${taskName}%`
          }
        }
      })
      .then(tasks => {
        console.log(`${JSON.stringify(tasks)}`);
      })
    })
  })
}

function searchTasks(taskName, orderBy) {
  db.Task.findAll({
    order : [[`${orderBy}`, `DESC`]],
    where : {
      task : {
        $like : `%${taskName}%`
      }
    }
  })
  .then(tasks => {
    console.log(`${JSON.stringify(tasks)}`);
  })
}

function sortTasksByDeadline() {
  db.Task.findAll({
    where : {
      deadline : {
        $like : `%${deadline}%`
      }
    }
  }).then(tasks => {
    console.log(`${JSON.stringify(tasks)}`);
  })
}

function sortTasksByComplete() {
  db.Task.findAll({
    order : [['id','DESC']],
    where : {
      is_complete : true
    }
  }).then(tasks => {
    console.log(`${JSON.stringify(tasks)}`);
  })
}

function sortTasksByNotComplete() {
  db.Task.findAll({
    order : [['id','DESC']],
    where : {
      is_complete : false
    }
  }).then(tasks => {
    console.log(`${JSON.stringify(tasks)}`);
  })
}


replServer.context.search = search
replServer.context.searchTasksByDepartment = searchTasksByDepartment
replServer.context.sortTasksByDeadline = sortTasksByDeadline
replServer.context.searchTasks = searchTasks
replServer.context.sortTasksByNotComplete = sortTasksByNotComplete
replServer.context.sortTasksByComplete = sortTasksByComplete
