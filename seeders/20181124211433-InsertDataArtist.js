"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Hosts", [
      {
        name: "The bagindas",
        type: group,
        about: "iam a band lorem",
        email: "bagindas@gmail.com",
        phone: "081232382323",
        accountId: 1
      },
      {
        name: "romeo",
        type: group,
        about: "iam a singerr",
        email: "romeo@gmail.com",
        phone: "081232382323",
        accountId: 2
      },
      {
        name: "rosa",
        type: solo,
        about: "iam a singerr",
        email: "rosa@gmail.com",
        phone: "081232382323",
        accountId: 3
      },
      {
        name: "afgan",
        type: solo,
        about: "iam a singerr",
        email: "afgan@gmail.com",
        phone: "081232382323",
        accountId: 4
      },
      {
        name: "The coding susah bener ya kenapa ya!!!hufffttt",
        type: group,
        about: "iam a band",
        email: "coding@gmail.com",
        phone: "081232382323",
        accountId: 5
      }
    ]);
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
