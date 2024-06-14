'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('certifications', { 
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      minScore: {
        allowNull: false,
        type: Sequelize.INTEGER,
        field: 'min_score',
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('certifications');
  }
};
