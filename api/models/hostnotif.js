"use strict";
module.exports = (sequelize, DataTypes) => {
  const HostNotif = sequelize.define(
    "HostNotif",
    {
      artistName: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      }
    },
    {}
  );
  HostNotif.associate = function(models) {
    // associations can be defined here
    models.createGigs.hasMany(models.HostNotif, {
      foreignKey: "hostId",
      targetKey: "id"
    });
  };
  return HostNotif;
};
