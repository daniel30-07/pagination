const express = require('express'),
    ejs = require('ejs'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser')
    mainRoutes = require('./routes/main')

const app = express()

mongoose.connect('mongodb://localhost:27017/article', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connected to DB...'))
.catch(error => console.logo('ERRO DB', error.message))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(mainRoutes)

app.set('view engine', 'ejs')

app.listen(8080, () => console.log('The server has started...'))