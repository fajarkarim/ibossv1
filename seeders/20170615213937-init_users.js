'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Users', [
      {
        username : "Fajar",
        email : "fajarabdulkarim@gmail.com",
        password : "fajar",
        role : "boss",
        createdAt : new Date(),
        updatedAt : new Date()
      },{
        username : "sumarno",
        email : "sumarno@gmail.com",
        password : "sumarno",
        role : "manager",
        createdAt : new Date(),
        updatedAt : new Date()
      },{
        username : "abdul",
        email : "fajarkarim@hotmail.com",
        password : "abdul",
        role : "manager",
        createdAt : new Date(),
        updatedAt : new Date()
      }
    ])
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
