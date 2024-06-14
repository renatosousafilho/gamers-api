'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('gamers_challenges', { 
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      score: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      language: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      finishedAt: {
        type: Sequelize.TIME,
        allowNull: false,
        field: 'finished_at',
      },
      gamerId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'gamer_id',
        references: {
          model: 'gamers',
          key: 'id'
        }
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('gamers_challenges');
  }
};
