"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    // let data = [];

    // for (let index = 1; index <= 3; index++) {
    //   data.push({
    //     name: "Dupp21",
    //     type: "solo",
    //     about: "Saya Soloist",
    //     email: "bagindas@gmail.com",
    //     phone: "081121212",
    //     accountId: index
    //   });
    // }

    return queryInterface.bulkInsert(
      "Artists",
      [
        {
          name: "Dupp21",
          type: "solo",
          about: "Saya Soloist",
          email: "bagindas@gmail.com",
          phone: "081121212",
          accountId: 3
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Artists", null, {});
  }
};
