'use strict';
module.exports = (sequelize, DataTypes) => {
  var Rewards = sequelize.define('Rewards', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'Users', key: 'id' }
    },
    adId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'Ads', key: 'id' }
    },
    beforeRewards: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    rewardPoints: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    afterRewards: {
      type: DataTypes.INTEGER,
      allowNull: false
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
  Rewards.associate = function(models) {
    // associations can be defined here
    Rewards.belongsTo(models.Ads, {foreignKey: 'adId', targetKey: 'id'});
    Rewards.belongsTo(models.Users, {foreignKey: 'userId', targetKey: 'id'});
  };
  return Rewards;
};