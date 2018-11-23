"use strict";
module.exports = (sequelize, DataTypes) => {
  const CreateGigs = sequelize.define("CreateGigs", {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    budget: {
      type: DataTypes.STRING,
      allowNull: false
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    photo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false
    },
    hostId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      references: {
        model: "Hosts",
        key: "id"
      }
    }
  });
  CreateGigs.associate = function(models) {
    // associations can be defined here
    models.Hosts.hasMany(models.CreateGigs, {
      foreignKey: "hostId",
      targetKey: "id"
    });
  };
  return CreateGigs;
};
