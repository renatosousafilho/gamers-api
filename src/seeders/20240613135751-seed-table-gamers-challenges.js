'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('gamers_challenges', [
      {
        score: 100,
        language: 'JS',
        finished_at: new Date(),
        gamer_id: 1,
      },
      {
        score: 200,
        language: 'Python',
        finished_at: new Date(),
        gamer_id: 1,
      },
      {
        score: 250,
        language: 'Python',
        finished_at: new Date(),
        gamer_id: 2,
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('gamers_challenges', null, {});
  }
};
