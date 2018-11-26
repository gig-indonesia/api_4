"use strict";
module.exports = (sequelize, DataTypes) => {
  const ArtistNotif = sequelize.define("ArtistNotif", {
    gigName: {
      type: DataTypes.STRING
    },
    status: {
      type: DataTypes.ENUM("approved", "rejected", "invited")
    },
    artistId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      references: {
        model: "Artists",
        key: "id"
      }
    },
    createGigsId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      references: {
        model: "CreateGigs",
        key: "id"
      }
    }
  });
  // ArtistNotif.associate = function(models) {
  //   // associations can be defined here
  //   models.Artist.hasMany(models.ArtistNotif, {
  //     foreignKey: "artistsId",
  //     onDelete: "CASCADE",
  //     as: "Artists",
  //     foreignKey: {
  //       allowNull: false
  //     }
  //   });
  // };
  ArtistNotif.associate = function(models) {
    // associations can be defined here
    models.Artist.hasMany(models.ArtistNotif, {
      foreignKey: "artistsId",
      targetKey: "id"
    });
  };

  // ArtistNotif.associate = function(models) {
  //   models.CreateGig.hasMany(models.ArtistNotif, {
  //     foreignKey: "createGigsId",
  //     onDelete: "CASCADE",
  //     as: "CreateGigs",
  //     foreignKey: {
  //       allowNull: false
  //     }
  //   });
  // };
  ArtistNotif.associate = function(models) {
    models.Gig.hasMany(models.ArtistNotif, {
      foreignKey: "createGigsId",
      targetKey: "id"
    });
  };
  return ArtistNotif;
};
