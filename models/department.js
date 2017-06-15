'use strict';
module.exports = function(sequelize, DataTypes) {
  var Department = sequelize.define('Department', {
    name: DataTypes.STRING,
    manager: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Department.hasMany(models.Task)
      }
    }
  });
  return Department;
};
