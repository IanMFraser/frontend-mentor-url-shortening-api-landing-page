const mongoose = require('mongoose');

const UrlSchema = new mongoose.Schema({
    urlCode: {
        type: String,
    },
    longUrl: {
        type: String,
        required: true,
    },
    shortUrl: {
        type: String,
        require: true,
    },
    date: {
        type: String,
        default: Date.now,
    },
});

module.exports = mongoose.model('Url', UrlSchema);