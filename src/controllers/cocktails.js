const express = require('express');
const router = express.Router();
const handler = require('../handlers/cocktails');
const { requireSignin } = require('./middlewares/auth');
const sgMail = require('@sendgrid/mail');


router.post('/', async (req, res) => {
	const {name, glass, ingredients, recipe, comments} = req.body.dataCocktail;
	try {
		const cocktail = await handler.createCocktail({
			name,
			glass,
			ingredients,
			recipe,
			comments,

		});
		res.json({
			ok: true,
			cocktail
		});
		
	} catch (error) {
		console.log(error);
		res.status(500).json({
			ok: false
		});
	}
});

router.post('/send-email', async (req, res) => {
	const {name, email, message, numPax, checkIn, checkOut, phone} = req.body.dataContact
	const ownEmail = 'ignacio.mele1@gmail.com'
	const emailData = [{
		from: 'no-reply@simplescosas.com',
		to: email,
		subject: `¡Welcome ${name}, from Simples Cosas Cabins!`,
		html: `
				<div>
				<h1>Welcome ${name}</h1>
				<h3>¡Thank you for contact Simples Cosas Cabins!</h3>
				<p>We will contact you to answer your questions as soon as possible.</p>
				<p style="padding-bottom: 60px">¡We'll wait for you!</p>
				</div>
			`
	},
	 {
		from: 'no-reply@simplescosas.com',
		to: ownEmail,
		subject: `${name} wants to contact you`,
		html: `
				<div>				
				<h3>${name} wants to contact you.</h3>
				<p>The message is the following:</p>
				<p><em>${message}</em></p>
				<p>Number of passengers: <strong>${numPax}</strong></p>
				<p>Check In: <strong>${checkIn}</strong></p>
				<p>Check Out: <strong>${checkOut}</strong></p>
				<p>Phone number: <strong>${phone}</strong></p>
				<h3>Contact by this email: ${email}</p>

			`
	}]
	sgMail.setApiKey(process.env.SENDGRID_API_KEY)
	try {
		await sgMail.send(emailData);
		res.json({
			ok: true,
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({
			ok: false,
			error: 'No se pudo enviar el email'
		});
	}
});

router.put('/:id',requireSignin, async (req, res) => {
	const cocktailTopUpdate = req.params.id;
	const fieldsToUpdate = req.body.fieldsToUpdate;
	try {
		const result = await handler.updateCocktail(cocktailTopUpdate, fieldsToUpdate);
		if (result[0] === 1) {
			res.json({
				ok: true,
			});
		} else {
			res.status(400).json({
				ok: false,
				error: 'No se pudo actualizar el cocktail'
			});
		}
	} catch (error) {
		console.log(error);
		res.status(500).json({
			ok: false
		});
	}
});

router.delete('/:id', requireSignin, async (req, res) => {
	const cocktailToDelete = req.params.id;
	try {
		const result = await handler.deleteCocktail(cocktailToDelete);
		if (result === 1) {
			res.json({
				ok: true,
			});
		} else {
			res.status(400).json({
				ok: false,
			})
		}
	} catch (error) {
		res.status(500).json({
			ok: false,
		})
		console.log(error);
	}
});

router.get('/', requireSignin, async (req, res) => {
	try {
		const params = {
			limit: parseInt(req.query.limit) || 1000,
			order: req.query.order || 'DESC',
			orderBy: req.query.orderBy || 'id',
			from: parseInt(req.query.from) - 1 || 0
		};
		const result = await handler.getCocktails(params);
		res.json({
			ok: true,
			cocktails: result
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({
			ok: false,
		});
	}
});

router.get('/:id', requireSignin, async (req, res) => {
	try {
		const cocktailId = parseInt(req.params.id);
		const cocktail = await handler.getCocktailById(cocktailId);
		if (cocktail) {
			res.json({
				ok: true,
				cocktail
			});
		} else {
			res.status(400).json({
				ok: false,
				error: `Ningun cocktail con el id ${cocktailId}`
			});
		}
	} catch (error) {
		res.status(500).json({
			ok: false,
		});
		console.log(error);
	}
});



router.get('/send-email/:id', async (req, res) => {
	const emailData = {
		from: 'ignacio.mele1@gmail.com',
		to: req.params.id,
		subject: 'test',
		html: `
				<h1>Email Test</h1>
				<p>Testing email</p>
				<p>Email de contacto: </p>
			`
	};
	SENDGRID_API_KEY='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'
	sgMail.setApiKey(process.env.SENDGRID_API_KEY)
	await sgMail.send(emailData);
	try {
		await sgMail.send(emailData);
		res.json({
			ok: true,
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({
			ok: false,
			error: 'No se pudo enviar el email'
		});
	}
});

module.exports = router;