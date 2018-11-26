"use strict";
module.exports = (sequelize, DataTypes) => {
  const HostNotif = sequelize.define("HostNotif", {
    name: {
      type: DataTypes.STRING
    },
    status: {
      type: DataTypes.ENUM("accepted", "applied", "rejected")
    },
    gigsId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Hosts",
        key: "id"
      }
    },
    artistId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Artists",
        key: "id"
      }
    },
    hostId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Hosts",
        key: "id"
      }
    }
  });

  HostNotif.associate = function(models) {
    // associations can be defined here
    models.HostNotif.belongsTo(models.Host);
    models.HostNotif.hasMany(models.Gig);
    models.HostNotif.hasMany(models.Artist);
  };
  return HostNotif;
};
