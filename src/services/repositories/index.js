const { Partner, Speaker, User } = require("../../models");

const getAllCounts = async () => {
	const partnerCount = await Partner.count({});
	const speakerCount = await Speaker.count({});
	const userCount = await User.count({});

	return {
		partners: partnerCount,
		speakers: speakerCount,
		users: userCount,
	}
}

module.exports = {
	getAllCounts,
}