'use strict';
module.exports = function(sequelize, DataTypes) {
  var Task = sequelize.define('Task', {
    task: DataTypes.STRING,
    is_complete: DataTypes.STRING,
    deadline: DataTypes.DATE,
    DepartmentId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        Task.belongsTo(models.Department, {foreignKey: "DepartmentId"})
      }
    }
  });
  return Task;
};
