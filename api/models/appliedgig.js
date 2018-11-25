"use strict";
module.exports = (sequelize, DataTypes) => {
  const AppliedGig = sequelize.define("AppliedGig", {
    date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false
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
  AppliedGig.associate = function(models) {
    // associations can be defined here
    models.Artist.hasmany(models.AppliedGig, {
      foreignKey: "artistsId",
      onDelete: "CASCADE",
      as: "Artists",
      foreignKey: {
        allowNull: false
      }
    });
  };

  AppliedGig.associate = function(models) {
    models.CreateGig.hasMany(models.AppliedGig, {
      foreignKey: "createGigsId",
      onDelete: "CASCADE",
      as: "CreateGigs",
      foreignKey: {
        allowNull: false
      }
    });
  };
  return AppliedGig;
};
