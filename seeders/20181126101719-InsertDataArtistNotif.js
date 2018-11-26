"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "ArtistNotifs",
      [
        {
          gigname: "John Doe1",
          status: "approved",
          artistId: 9,
          createGigsId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          gigname: "John Doe2",
          status: "rejected",
          artistId: 10,
          createGigsId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          gigname: "John Doe3",
          status: "invited",
          artistId: 11,
          createGigsId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          gigname: "John Doe4",
          status: "approved",
          artistId: 12,
          createGigsId: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          gigname: "John Doe5",
          status: "approved",
          artistId: 13,
          createGigsId: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          gigname: "John Doe6",
          status: "approved",
          artistId: 14,
          createGigsId: 6,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          gigname: "John Doe7",
          status: "approved",
          artistId: 15,
          createGigsId: 7,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          gigname: "John Doe8",
          status: "approved",
          artistId: 16,
          createGigsId: 8,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("ArtistNotifs", null, {});
  }
};
