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
    models.AppliedGigs.hasOne(models.Notifications, {
      onDelete: "CASCADE",
      as: "AppliedGigs",
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Notifications;
};
