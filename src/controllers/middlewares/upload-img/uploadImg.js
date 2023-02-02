const multer = require('multer')
const mimeTypes = require('mime-types')
const multerGoogleStorage = require("multer-cloud-storage")

const uploadImg = multer({
    storage: multerGoogleStorage.storageEngine({
        autoRetry: true,
        bucket: '',
        projectId: "",
        keyFilename: '',
        destination: 'img/',
        filename: (req, file, cb) => {
        cb("", Date.now() + file.originalname)
    }
    })
})


module.exports = {
    uploadImg 
}