"use strict";
module.exports = (sequelize, DataTypes) => {
  const ArtistNotif = sequelize.define("ArtistNotif", {
    gigName: {
      type: Sequelize.STRING
    },
    status: {
      type: Sequelize.ENUM("approved", "rejected", "invited")
    },
    artistId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      unique: true,
      references: {
        model: "Artists",
        key: "id"
      }
    },
    createGigsId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      unique: true,
      references: {
        model: "CreateGigs",
        key: "id"
      }
    }
  });
  ArtistNotif.associate = function(models) {
    // associations can be defined here
    models.Artist.hasmany(models.ArtistNotif, {
      foreignKey: "artistsId",
      onDelete: "CASCADE",
      as: "Artists",
      foreignKey: {
        allowNull: false
      }
    });
  };

  ArtistNotif.associate = function(models) {
    models.CreateGig.hasMany(models.ArtistNotif, {
      foreignKey: "createGigsId",
      onDelete: "CASCADE",
      as: "CreateGigs",
      foreignKey: {
        allowNull: false
      }
    });
  };
  return ArtistNotif;
};
