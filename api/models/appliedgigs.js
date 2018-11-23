"use strict";
module.exports = (sequelize, DataTypes) => {
  const AppliedGigs = sequelize.define("AppliedGigs", {
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
  AppliedGigs.associate = function(models) {
    models.Artists.hasmany(models.AppliedGigs, {
      foreignKey: "artistsId",
      onDelete: "CASCADE",
      as: "artists",
      foreignKey: {
        allowNull: false
      }
    });
  };

  AppliedGigs.associate = function(models) {
    models.CreateGigs.hasMany(models.AppliedGigs, {
      foreignKey: "createGigsId",
      onDelete: "CASCADE",
      as: "createGigs",
      foreignKey: {
        allowNull: false
      }
    });
  };

  // Artist.associate = function(models) {
  //   // associations can be defined here
  //   models.Artist.hasOne(models.Accounts, {
  //     foreignKey: "accountId",
  //     targetKey: "id"
  //   });
  // };

  // AppliedGigs.associate = function(models) {
  //   // associations can be defined here
  //   models.AppliedGigs.hasOne(models.CreateGigs, {
  //     foreignKey: "createGigsId",
  //     targetKey: "id"
  //   });
  // };
  return AppliedGigs;
};
