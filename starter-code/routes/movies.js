const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie');
const mongoose = require("mongoose")

router.get("/movies", (req,res)=> {

    Movie.find({})
    .then( result => {
        res.render("movies/index", {showMovies: result})
    })
    .catch(err => {
        res.send(err)
    })
})

router.get("/movies/new", (req,res)=> {
    res.render("movies/new")
})

router.post("/movies", (req,res)=> {

    //FIRST CREATING NEW OBJECT with the information from the form
   let newMovie = {title:req.body.title,
                  genre:req.body.genre,
                  plot:req.body.plot
    }

    //SECOND creating an instance of Movie(model) where we are putting data from the new object above
        var saveMovie = new Movie(newMovie)

    //THIRD we take an instance (created above) and calling a "save" method from mongoose
        saveMovie.save(function (err) {
        if(err) res.render("movies/new")
        else res.redirect("/movies")
                
    })
})

router.post("/movies/:id/delete", (req,res, next)=> {
    let moviId = req.params.id

    Movie.findByIdAndRemove(moviId)
        .then( res.redirect("/movies"))
        .catch(err => {
        next(err)
    })  
})

// Edit movie
router.get("/movies/edit/:id", (req,res)=> {
    let moviId = mongoose.Types.ObjectId(req.params.id)

    Movie.find({_id: moviId})
        .then((movi)=> {
            console.log(movi)
            res.render("movies/edit", {movie: movi[0]})
        })
        .catch((err)=> {
            res.send("error")
        })
    // else res.redirect("/movies")
})

router.post("/movies/:id", (req,res)=> {
    let newMovie = {
      title:req.body.title,
      genre:req.body.genre,
      plot:req.body.plot
    }
    
    Movie.updateOne({_id: req.params.id}, newMovie)
    .then( res.redirect("/movies"))
    .catch(err => {
    next(err)
   }) 
})

module.exports = router;