const jwt = require('jsonwebtoken');
const repository = require('../services/repositories/cocktails');

const getCocktails = async params => {
	const cocktails = await repository.getCocktails(params);
	return cocktails;
};

const getCocktailById = async cocktailId => {
	const cocktail = await repository.getCocktailById(cocktailId);
	return cocktail;
};

const createCocktail = async cocktailToPersist => {
	const cocktail = await repository.persist(cocktailToPersist);
	return cocktail;
};

const updateCocktail = async (cocktailToUpdate, fieldsToUpdate) => {
	const result = await repository.update(cocktailToUpdate, fieldsToUpdate);
	return result;
};

const deleteCocktail = async cocktailToDelete => {
	const result = await repository.destroy(cocktailToDelete);
	return result;
};

module.exports = {
	getCocktails,
	createCocktail,
	updateCocktail,
	deleteCocktail,
	getCocktailById,
};