const express = require('express');
const router = express.Router();
const { uploadImg } = require('./middlewares/upload-img/uploadImg')
const { requireSignin } = require('./middlewares/auth');
const { response } = require('../server');

router.post('/', requireSignin, uploadImg.single('fileName'), async (req, res) => {
    try {
        const urlImage = await req.file
        const production = ''
        const staging = process.env.PORT 
        console.log(urlImage)
		res.json({
            ok: true,
			url: (true ? production : staging) + urlImage.filename
		});
	} catch (error) {
        console.log(error);
		res.json({
            ok: false,
            error: error
		});
	}
});


// router.get('/', uploadImg.single('fileName'), async(req, res) => {
//     try {
//         const urlImage = await req.file
// 		const production = 'https://storage.googleapis.com/roomin-disney.appspot.com/img/'
//         const staging = process.env.PORT 
//         console.log(urlImage)
// 		res.json({
//             ok: true,
// 			url: (true ? production : staging) + urlImage.filename
// 		});
// 	} catch (error) {
//         console.log(error);
// 		res.status(500).json({
//             ok: false
// 		});
// 	}
// })




module.exports = router








// router.post('/uploadImage',requireSignin, async (req, res) => {
// 	const disertanteToPersist = req.body.disertante;
// 	try {
// 		const imageBase64 = ''
// 		var base64Data = imageBase64.replace(/^data:image\/png;base64,/, "");
// 		let path = __dirname.replace("../../src", "../../public/uploads/img");
// 		console.log("path: ",path)
// 		let fullPath = path + Date.now() + '.jpg'
// 		console.log("fullPath: ", fullPath)

// 		require("fs").writeFile(path, base64Data, 'base64', function(err) {
// 		console.log(err);
// 		});
		
//         // fs.writeFileSync(path, base64Data,  {encoding: 'base64'});
// 		const disertante = await handler.createDisertante(disertanteToPersist);
//         // const base64Data = imageData.replace(/[^A-Za-z0-9\+\/]/g, "");
// 		res.json({
// 			ok: true,
// 			disertante
// 		});
// 	} catch (error) {
// 		console.log(error);
// 		res.status(500).json({
// 			ok: false
// 		});
// 	}
// });

