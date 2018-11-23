"use strict";
module.exports = (sequelize, DataTypes) => {
  const ArtistNotif = sequelize.define(
    "ArtistNotif",
    {
      gigName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      status: {
        type: DataTypes.ENUM("approved", "rejected", "invited")
      },
      createGigsId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "CreateGigs",
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
      }
    },
    {}
  );
  ArtistNotif.associate = function(models) {
    // associations can be defined here
    models.CreateGigs.hasMany(models.ArtistNotif, {
      foreignKey: "createGigsId",
      targetKey: "id"
    });

    models.Artist.hasMany(models.ArtistNotif, {
      foreignKey: "artistId",
      targetKey: "id"
    });
  };
  return ArtistNotif;
};
