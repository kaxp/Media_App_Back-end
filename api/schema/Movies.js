const mongoose = require('mongoose')

const moviesSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: String,
    year : Number,
    rating : Number,
    genre : String,
    director: String,
    duration: String,
    summary : String,
    thumbnailImage: String,
    bannerImage: String
})

module.exports = mongoose.model('movies',moviesSchema)