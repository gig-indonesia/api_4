"use strict";
module.exports = (sequelize, DataTypes) => {
  const Hosts = sequelize.define("Hosts", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    company: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    accountId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      references: {
        model: "Accounts",
        key: "id"
      }
    }
  });
  Hosts.associate = function(models) {
    // associations can be defined here
    models.Hosts.hasOne(models.Accounts, {
      foreignKey: "accountId",
      targetKey: "id"
    });
  };
  return Hosts;
};
