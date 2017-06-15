'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Tasks', [
      {
        task: "Pertemuan dengan direktur PT AUO",
        is_complete: false,
        deadline: new Date("2017-06-18"),
        DepartmentId : 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        task: "Sales target 3000 Unit",
        is_complete: false,
        deadline: new Date("2017-08-18"),
        DepartmentId : 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        task: "Perencanaan Event",
        is_complete: false,
        deadline: new Date("2017-07-18"),
        DepartmentId : 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        task: "Gathering Manager",
        is_complete: false,
        deadline: new Date("2017-06-18"),
        DepartmentId : 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ])
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Tasks', null, {})
  }
};
