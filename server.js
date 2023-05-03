// DEPENDENCIES
const express = require('express')

// DEPENDENCIES
const methodOverride = require('method-override')

const mongoose = require('mongoose')


// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
const app = express()
console.log(PORT)

mongoose.set("strictQuery", true);
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, 
  () => { console.log('connected to mongo: ', process.env.MONGO_URI) }
)

// MIDDLEWARE (should be after express but fore route)
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.use(express.static('public'))

app.use(express.urlencoded({extended: true}))


app.use(methodOverride('_method'))



// ROUTES
app.get('/', (req, res) => {
    res.send('Welcome to an Awesome App about Breads')
})
  
// Breads ROUTES
const breadsController = require('./controllers/breads_controller.js')
app.use('/breads', breadsController)
  

// 404 Page
app.get('*', (req, res) => {
  res.send('404')
})

// LISTEN
app.listen(PORT, () => {
  console.log('listening on port', PORT);
})
