'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Departments', [
      {
        name : "Marketing",
        manager : "Bpk Mulyono",
        email : "mulyono@gmail.com",
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        name : "Humaniora",
        manager : "Bpk Sumarno",
        email : "sumarno@gmail.com",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ])
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Departments', null, {})
  }
};
