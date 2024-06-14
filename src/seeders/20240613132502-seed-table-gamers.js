'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('gamers', [
      {
        id: 1,
        name: 'Renato',
        active: true,
      },
      {
        id: 2,
        name: 'Mariotto',
        active: true,
      },
      {
        id: 3,
        name: 'Rafa Tedesco',
        active: false,
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('gamers', null, {});
  }
};
