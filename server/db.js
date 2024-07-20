const mongoose = require('mongoose')

function Connection(){
    const mongoURL = "mongodb://127.0.0.1:27017/chat"
    mongoose.connect(mongoURL)
    .then(() => console.log('connected mongodb'))
    .catch(err => console.log(err))
}

module.exports = Connection