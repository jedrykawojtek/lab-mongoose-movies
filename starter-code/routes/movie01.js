const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie');


//what kind of route this is - dynamic
//how do we get the specific id:
// 1. file: index.hbs
// 2. object: req.params 
router.get("/movies/:id", (req,res)=> {
    let moviId = req.params.id

    //what we are looking for in the database: for a specific document 
    //which value we are searching by : (by ID)
    Movie.findById(moviId)
    .then( result => {
        //render function takes two parameters:
        // 1. path ("movies/movie01.hbs")
        // 2. specific movie
        res.render("movies/movie01", {firstMovie : result})
    })
    .catch(err => {
        res.send(err)
   })

})
   

module.exports = router;