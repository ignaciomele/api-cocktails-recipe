const expressJwt = require('express-jwt');
const jwt = require('jsonwebtoken');

// const { getUserById } = require('../../handlers/users');

const requireSignin = async (req, res, next) => {
	/* const authorization = req.get('Authorization');
	if (!authorization) {
		console.log(authorization);
		return res.status(400).json({
			ok: false,
			error: 'missing token'
		});
	}
	if (authorization === process.env.Authorization) { 
		next()
		} else { 
		res.status(403).json({
			ok: false,
			error: 'invalid token'
		})
	} */

	next()
}

const adminMiddleware = async (req, res, next) => {
	const user = await getById(req.user.id);
	if (!user) {
		return res.status(400).json({
			ok: false,
			error: 'user not found'
		});
	}
	if (user.roleId !== 1) {
		return res.status(400).json({
			ok: false,
			error: 'admin resource, access denied'
		});
	}
	req.profile = user;
	next();
};


module.exports = {
	requireSignin,
	adminMiddleware
}