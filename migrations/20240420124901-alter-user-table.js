'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.removeColumn('Users', 'name');
    await queryInterface.addColumn('Users', 'firstName', {
      type: Sequelize.STRING,
      allowNull: false,
    });
    await queryInterface.addColumn('Users', 'lastName', {
      type: Sequelize.STRING,
      allowNull: false,
    });
    await queryInterface.addColumn('Users', 'phoneNumber', {
      type: Sequelize.INTEGER,
      allowNull: false,
    });
    await queryInterface.addColumn('Users', 'registrationNumber', {
      type: Sequelize.INTEGER,
      allowNull: false,
    });
    await queryInterface.addColumn('Users', 'address1', {
      type: Sequelize.STRING,
      allowNull: false,
    });
    await queryInterface.addColumn('Users', 'address2', {
      type: Sequelize.STRING,
      allowNull: true,
    });
    await queryInterface.addColumn('Users', 'userName', {
      type: Sequelize.STRING,
      allowNull: false,
    });
    await queryInterface.addColumn('Users', 'role', {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue:'Member',
    });
    await queryInterface.addColumn('Users', 'profileImage', {
      type: Sequelize.STRING,
      allowNull: true,
    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.addColumn('Users', 'name', {
      type: Sequelize.STRING,
      allowNull: false,
    });
    await queryInterface.removeColumn('Users', 'firstName');
    await queryInterface.removeColumn('Users', 'lastName');
  }
};
