'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example: */
      return queryInterface.bulkInsert('Tasks', [{
        task: 'Belajar Javscript',
        deadline : '20171010',
        completed: false,
        DepartmentId : 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        task: 'Belajar Sequelize js',
        deadline : '20171111',
        completed: false,
        DepartmentId : 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});

  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
