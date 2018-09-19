const express = require('express')
const Movies = require('../schema/Movies')

const route = express.Router()
const mongoose = require('mongoose')

route.get('/getAllMovies', async (req, res, next)=>{
    try{
        const moviesList = await Movies.find().exec()
        return res.status(200).json({status: true, moviesList})
    }catch{
        return res.status(500).json({status: false, message: err.message})
    }
})

route.post('/insertMovies', async (req, res, next) =>{
    const title = req.body.title
    const year = req.body.year
    const director = req.body.director
    const rating = req.body.rating
    const genre = req.body.genre
    const summary = req.body.summary
    const duration = req.body.duration
    const thumbnailImage = req.body.thumbnailImage
    const bannerImage = req.body.bannerImage

    let m = new Movies({
        _id: mongoose.Types.ObjectId(),
        title,year,director,rating,genre,summary,duration,thumbnailImage,bannerImage   
    })

    try{
        const savedMovies = await m.save()
        return res.status(200).json({status: true, savedMovies: savedMovies})

    }catch{
        return res.status(500).json({status: false, message: err.message})
    }
})

route.delete('/deleteMovies', async(req, res, next) =>{
    try{
        const _id = req.body._id
        let deleteMovies = await Movies.remove({_id})
        return res.status(200).json({status: true, deleteMovies: deleteMovies})

    }catch(err){
        return res.status(500).json({status: false, message: err.message})
    }
})

module.exports = route