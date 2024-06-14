'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('gamers_certifications', [
      {
        gamer_id: 1,
        certification_id: 1,
      },
      {
        gamer_id: 1,
        certification_id: 2,
      },
      {
        gamer_id: 1,
        certification_id: 3,
      },
      {
        gamer_id: 2,
        certification_id: 1,
      },
      {
        gamer_id: 2,
        certification_id: 2,
      },
      {
        gamer_id: 3,
        certification_id: 4,
      },
      {
        gamer_id: 3,
        certification_id: 5,
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('gamers_certifications', null, {});
  }
};
