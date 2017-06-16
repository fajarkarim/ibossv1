
// let deptTasks = [
//   {
//     id : 1,
//     task : "makan ayam",
//     is_complete : true,
//     deadline : new Date("2012-06-01"),
//     DepartmentId : 1
//   },{
//     id : 2,
//     task : "makan onta",
//     is_complete : true,
//     deadline : new Date("2017-05-04"),
//     DepartmentId : 1
//   },{
//     id : 3,
//     task : "Makan gule",
//     is_complete : false,
//     deadline : new Date("2017-07-01"),
//     DepartmentId : 1
//   },{
//     id : 4,
//     task : "lari iga",
//     is_complete : true,
//     deadline : new Date("2017-07-01"),
//     DepartmentId : 1
//   },{
//     id : 5,
//     task : "lari larii",
//     is_complete : true,
//     deadline : new Date("2017-07-01"),
//     DepartmentId : 1
//   },
// ]

function report(tasks, deptName) {

  tasks = tasks.sort(function(a,b){
    return a.deadline.getMonth() - b.deadline.getMonth();
  });

  var monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];

  let result = {}
  let months = []
  let monthsComplete = []

  tasks.forEach(task => {
    let month = monthNames[task.deadline.getMonth()]
    months.push(month)
  })

  tasks.forEach(task => {
    if (task.is_complete) {
      let month = monthNames[task.deadline.getMonth()]
      monthsComplete.push(month)
    }
  })

  var mapComplete = monthsComplete.reduce(function (p, c) {
      p[c] = (p[c] || 0) + 1;
      return p;
  }, {});

  var mapAll = months.reduce(function (p, c) {
      p[c] = (p[c] || 0) + 1;
      return p;
  }, {});

  let completedArr = Object.keys(mapAll)

  let percentage = []
  for (let i = 0; i < completedArr.length; i++) {
    let completed = mapComplete[`${completedArr[i]}`]
    let all = mapAll[`${completedArr[i]}`]
    let total = Math.floor(completed / all * 100)
    percentage.push(total)
  }

  result.name = deptName
  result.months = completedArr
  result.percentage = percentage
  return result
}
// console.log(report(deptTasks));

module.exports = {report}
