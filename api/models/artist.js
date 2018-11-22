"use strict";
module.exports = (sequelize, DataTypes) => {
  const Artist = sequelize.define("Artist", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    type: {
      type: DataTypes.ENUM("solo", "group"),
      allowNull: false
    },
    photo: {
      type: DataTypes.STRING
    },
    video: {
      type: DataTypes.STRING
    },
    accountId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      references: {
        model: "Accounts",
        key: "id"
      }
    }
  });
  Artist.associate = function(models) {
    // associations can be defined here
    models.Artist.hasOne(models.Accounts, {
      foreignKey: "accountId",
      targetKey: "id"
    });
  };
  return Artist;
};
