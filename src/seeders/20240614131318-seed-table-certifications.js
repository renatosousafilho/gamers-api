'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('certifications', [
      {
        id: 1,
        name: 'TypeScript - Beginner',
        min_score: 100,
      },
      {
        id: 2,
        name: 'TypeScript - Intermediate',
        min_score: 250,
      },
      {
        id: 3,
        name: 'TypeScript - Advanced',
        min_score: 500,
      },
      {
        id: 4,
        name: 'Python - Beginner',
        min_score: 100,
      },
      {
        id: 5,
        name: 'Python - Intermediate',
        min_score: 250,
      },
      {
        id: 6,
        name: 'Python - Advanced',
        min_score: 500,
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('certifications', null, {});
  }
};
