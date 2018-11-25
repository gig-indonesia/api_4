"use strict";
module.exports = (sequelize, DataTypes) => {
  const CreateGig = sequelize.define(
    "CreateGig",
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      budget: {
        type: DataTypes.DECIMAL(10, 2),
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
      latLng: {
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
    },
    {}
  );
  CreateGig.associate = function(models) {
    // associations can be defined here
    models.Host.hasMany(models.CreateGig, {
      foreignKey: "hostId",
      targetKey: "id"
    });
  };
  return CreateGig;
};
