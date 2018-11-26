"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Applicants",
      [
        {
          status: "pending",
          artistId: 9,
          gigsId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          status: "approved",
          artistId: 10,
          gigsId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          status: "rejected",
          artistId: 11,
          gigsId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          status: "approved",
          artistId: 12,
          gigsId: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          status: "rejected",
          artistId: 13,
          gigsId: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          status: "pending",
          artistId: 14,
          gigsId: 6,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          status: "approved",
          artistId: 15,
          gigsId: 7,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          status: "rejected",
          artistId: 16,
          gigsId: 8,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Applicants", null, {});
  }
};
