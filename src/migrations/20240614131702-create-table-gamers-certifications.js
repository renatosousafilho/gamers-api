'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('gamers_certifications', { 
      gamerId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        field: 'gamer_id',
        references: {
          model: 'gamers',
          key: 'id'
        }
      },
      certificationId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        field: 'certification_id',
        references: {
          model: 'certifications',
          key: 'id'
        }
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('gamers_certifications');
  }
};
