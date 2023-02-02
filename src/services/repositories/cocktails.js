const { Cocktail } = require('../../models');

const persist = async cocktailToPersist => {
	const result = await Cocktail.create(cocktailToPersist);
	return result;
};

const update = async (cocktailToUpdate, fieldsToUpdate) => {
	const result = await Cocktail.update({ ...fieldsToUpdate },
		{
			where: {
				id: cocktailToUpdate
			}
		});
	return result;
};

const getCocktails = async params => {
	const result = await Cocktail.findAll({
		limit: params.limit,
		offset: params.from,
		order: [[params.orderBy, params.order]],
	});
	return result;
};

const getCocktailById = async cocktailId => {
	const result = await Cocktail.findOne({
		where: {
			id: cocktailId
		}
	});
	return result;
};

const destroy = async cocktailToDelete => {
	const result = await Cocktail.destroy({
		where: {
			id: cocktailToDelete
		}
	});
	return result;
};

module.exports = {
	persist,
	update,
	getCocktails,
	destroy,
	getCocktailById,
};