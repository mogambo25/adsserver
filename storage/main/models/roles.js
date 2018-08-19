'use strict';
module.exports = (sequelize, DataTypes) => {
  var Roles = sequelize.define('Roles', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    createdBy: {
      allowNull: false,
      type: DataTypes.STRING
    },
    updatedBy: {
      allowNull: false,
      type: DataTypes.STRING
    }
  }, {
    timestamps: true
  });
  Roles.associate = function(models) {
    // associations can be defined here
  };
  return Roles;
};