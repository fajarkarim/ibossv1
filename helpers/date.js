
function convertDate(date) {
  var monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];

  return monthNames[date.getMonth()]
}

// var date = new Date()
// console.log(convertDate(date));


module.exports = {convertDate}
