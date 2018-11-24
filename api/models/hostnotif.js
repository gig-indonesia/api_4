"use strict";
module.exports = (sequelize, DataTypes) => {
  const HostNotif = sequelize.define("HostNotif", {
    name: {
      type: DataTypes.STRING
    },
    status: {
      type: DataTypes.STRING
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
  HostNotif.associate = function(models) {
    // associations can be defined here
    models.Host.hasMany(models.HostNotif, {
      foreignKey: "hostId",
      targetKey: "id"
    });
  };
  return HostNotif;
};
