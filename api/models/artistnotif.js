"use strict";
module.exports = (sequelize, DataTypes) => {
  const ArtistNotif = sequelize.define(
    "ArtistNotif",
    {
      gigName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      status: {
        type: Sequelize.ENUM("approved", "rejected", "invited")
      },
      createGigsId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "CreateGigs",
          key: "id"
        }
      },
      artistId: {
        type: Sequelize.INTEGER,
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
    models.createGigs.hasMany(models.ArtistNotif, {
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
