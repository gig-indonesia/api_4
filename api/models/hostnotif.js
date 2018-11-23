"use strict";
module.exports = (sequelize, DataTypes) => {
  const HostNotif = sequelize.define(
    "HostNotif",
    {
      artistName: {
        type: DataTypes.STRING
      },
      status: {
        type: DataTypes.STRING
      }
    },
    {}
  );
  HostNotif.associate = function(models) {
    // associations can be defined here
    models.CreateGigs.hasMany(models.HostNotif, {
      foreignKey: "hostId",
      targetKey: "id"
    });
  };
  return HostNotif;
};
