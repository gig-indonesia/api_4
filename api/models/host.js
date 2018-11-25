"use strict";
module.exports = (sequelize, DataTypes) => {
  const Host = sequelize.define(
    "Host",
    {
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
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true
        }
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
    },
    {}
  );
  Host.associate = function(models) {
    // associations can be defined here
    models.Account.hasOne(models.Host, {
      foreignKey: "accountId",
      targetKey: "id"
    });
  };
  return Host;
};
