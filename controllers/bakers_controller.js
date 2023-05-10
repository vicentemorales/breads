// dependencies
const express = require('express')
const Baker = require('../models/baker.js')
const bakerSeedData = require('../models/baker_seed.js')
const bakers = express.Router()

bakers.get('/data/seed', (req, res) => {
    //Uncomment to enter baker seed data
    //Baker.insertMany(bakerSeedData).then
    (res.redirect('/breads'))
})


// Index: 
bakers.get('/', (req, res) => {
    Baker.find()
        .populate('breads')
        .then((foundBakers) => {
            res.send(foundBakers)
        })
})                    


// Show: 
bakers.get('/:id', (req, res) => {
    Baker.findById(req.params.id)
        .populate('breads')
        .then((foundBaker) => {
            res.render('bakerShow', {
                baker: foundBaker
            })
        })
})

// export
module.exports = bakers;                    
