"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "HostNotifs",
      [
        {
          name: "The Bagindo",
          status: "accepted",
          hostId: 1,
          applicantId: 17,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "sule",
          status: "applied",
          hostId: 2,
          applicantId: 18,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Black magic",
          status: "rejected",
          hostId: 3,
          applicantId: 19,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Green Day",
          status: "accepted",
          hostId: 4,
          applicantId: 20,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Dangdut Pantura",
          status: "applied",
          hostId: 5,
          applicantId: 21,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "The groove",
          status: "rejected",
          hostId: 6,
          applicantId: 22,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "The brandals",
          status: "accepted",
          hostId: 7,
          applicantId: 23,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "The kop",
          status: "applied",
          hostId: 8,
          applicantId: 24,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("HostNotifs", null, {});
  }
};
