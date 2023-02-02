const mongoose = require('mongoose')

// const URI = 'mongodb://localhost/simplescosascabin'
const URI = 'mongodb+srv://ignaciomele:ofMXzjlomyZ2av0c@simplescosascabin.hhqwq2v.mongodb.net/test'
// const URI = 'mongodb+srv://ignaciomele:ofMXzjlomyZ2av0c@simplescosascabin.hhqwq2v.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(URI)
    .then(db => console.log('DB is connected'))
    .catch(err => console.log(err))

module.exports = mongoose