'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Cocktails', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      glass: {
        type: Sequelize.STRING
      },
      ingredients: {
        type: Sequelize.TEXT('long')
      },
      recipe: {
        type: Sequelize.TEXT('long')
      },
      comments: {
        type: Sequelize.TEXT('long')
      },
      image: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deletedAt: {
				type: Sequelize.DATE
			}
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Cocktails');
  }
};