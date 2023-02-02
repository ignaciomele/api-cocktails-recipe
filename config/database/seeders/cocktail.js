'use strict';
const bcrypt = require('bcrypt');

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			'Cocktails', 
			[
				{
                    name: 'Moscow Mule',
                    glass: 'Highball glass',
                    ingredients: 'Vodka(2 oz), zumo de lima(3/4 oz), ginger beer, bitter Angostura(1 gota), hojas de menta(para decorar), hielo.',
                    recipe: 'Añade el vodka y el jugo de lima a una coctelera con unos cubitos de hielo y agita vigorosamente. Vierta el contenidode una taza de cobre o un vaso de trago largo sobre unos cubitos de hielo y luego llenelo con cerveza de jengibre fria.',
                    comments: 'Se necesita enfriar bien el vaso con hielo.',
                    image: '123456.png',
					createdAt: new Date(),
					updatedAt: new Date(),
				}
			],
			{}
		);
	},

	down: async (queryInterface, Sequelize) => {
		/**
		 * Add commands to revert seed here.
		 *
		 * Example:
		 * await queryInterface.bulkDelete('People', null, {});
		 */
	},
};