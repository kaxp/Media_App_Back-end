const express = require('express')
const TV_Show = require('../schema/TV_Show')

const route = express.Router()
const mongoose = require('mongoose')

route.get('/getAllTV_Show', async (req, res, next)=>{
    try{
        const tv_showList = await TV_Show.find().exec()
        return res.status(200).json({status: true, tv_showList})
    }catch{
        return res.status(500).json({status: false, message: err.message})
    }
})

route.post('/insertTV_Show', async (req, res, next) =>{
    const title = req.body.title
    const year = req.body.year
    const director = req.body.director
    const rating = req.body.rating
    const genre = req.body.genre
    const summary = req.body.summary
    const duration = req.body.duration
    const thumbnailImage = req.body.thumbnailImage
    const bannerImage = req.body.bannerImage

    let m = new TV_Show({
        _id: mongoose.Types.ObjectId(),
        title,year,director,rating,genre,summary,duration,thumbnailImage,bannerImage   
    })

    try{
        const savedTV_Show = await m.save()
        return res.status(200).json({status: true, savedTV_Show: savedTV_Show})

    }catch{
        return res.status(500).json({status: false, message: err.message})
    }
})

route.delete('/deleteTV_Show', async(req, res, next) =>{
    try{
        const _id = req.body._id
        let deleteTV_Show = await TV_Show.remove({_id})
        return res.status(200).json({status: true, deleteTV_Show: deleteTV_Show})

    }catch(err){
        return res.status(500).json({status: false, message: err.message})
    }
})

module.exports = route