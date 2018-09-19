const mongoose = require('mongoose')

const booksSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: String,
    author: String,
    rating: Number,
    reviews: Number,
    description: String,
    aboutAuthor: String,
    bannerImage: String
})

module.exports = mongoose.model('books',booksSchema)