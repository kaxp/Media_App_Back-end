const express = require('express')
const   mongoose = require('mongoose')
const bodyParser = require('body-parser')
const app = express()

const moviesRoute = require('./api/routes/movies')
const tv_show = require('./api/routes/tv_show')
const booksRoute = require('./api/routes/books')

mongoose.connect('mongodb://kapil:kapil232@ds159812.mlab.com:59812/media_detail')
.then(result => console.log('connected to mongoDB'))
.catch(err => console.log('err.message :', err.message))


app.use(bodyParser.urlencoded({extended : false}))
app.use(bodyParser.json())

app.use('/movies', moviesRoute)
app.use('/books', booksRoute)
app.use('/tv_show', tv_show)


const port = process.env.port || 3000

app.listen(port, () =>{
    console.log('the app is running on port 3000')
})