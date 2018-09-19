const express = require('express')
const Books = require('../schema/Books')

const route = express.Router()
const mongoose = require('mongoose')

route.get('/getAllBooks', async (req, res, next)=>{
    try{
        const booksList = await Books.find().exec()
        return res.status(200).json({status: true, booksList})
    }catch{
        return res.status(500).json({status: false, message: err.message})
    }
})

route.post('/insertBooks', async (req, res, next) =>{
    const title = req.body.title
    const author = req.body.author
    const rating = req.body.rating
    const description = req.body.description
    const reviews = req.body.reviews
    const aboutAuthor = req.body.aboutAuthor
    const bannerImage = req.body.bannerImage

    let m = new Books({
        _id: mongoose.Types.ObjectId(),
        title,author,rating,reviews,description,aboutAuthor,bannerImage   
    })

    try{
        const savedBooks = await m.save()
        return res.status(200).json({status: true, savedBooks: savedBooks})

    }catch{
        return res.status(500).json({status: false, message: err.message})
    }
})

route.delete('/deleteBooks', async(req, res, next) =>{
    try{
        const _id = req.body._id
        let deleteBooks = await Books.remove({_id})
        return res.status(200).json({status: true, deleteBooks: deleteBooks})

    }catch(err){
        return res.status(500).json({status: false, message: err.message})
    }
})

module.exports = route