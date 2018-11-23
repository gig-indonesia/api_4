"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("ArtistNotifs", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
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
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("ArtistNotifs");
  }
};
