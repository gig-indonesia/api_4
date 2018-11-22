"use strict";
module.exports = (sequelize, DataTypes) => {
  const Notifications = sequelize.define("Notifications", {
    description: {
      type: DataTypes.STRING,
      allowNull: true
    },
    event: {
      type: DataTypes.STRING,
      allowNull: true
    },
    appliedGigsId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      references: {
        model: "AppliedGigs",
        key: "id"
      }
    }
  });
  Notifications.associate = function(models) {
    // associations can be defined here
    models.Notifications.hasOne(models.AppliedGigs, {
      onDelete: "CASCADE",
      as: "AppliedGigs",
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Notifications;
};
