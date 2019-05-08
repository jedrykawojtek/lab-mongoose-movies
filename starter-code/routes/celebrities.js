const express = require('express');
const router = express.Router();
const Celebrity = require('../models/Celebrity');
const mongoose = require("mongoose")

router.get("/celebrities", (req,res)=> {

    Celebrity.find({})
    .then( result => {
        res.render("celebrities/index", {showCelebrities: result})
    })
    .catch(err => {
        res.send(err)
    })
})

router.get("/celebrities/new", (req,res)=> {
    res.render("celebrities/new")
})

router.post("/celebrities", (req,res)=> {

    //FIRST CREATING NEW OBJECT with the information from the form
   let newCelebrity = {name:req.body.name,
                  occupation:req.body.occupation,
                  catchPhrase:req.body.catchPhrase
    }

    //SECOND creating an instance of Celebrity (model) where we are putting data from the new object above
        var saveCelebrity = new Celebrity(newCelebrity)

    //THIRD we take an instance (created above) and calling a "save" method from mongoose
        saveCelebrity.save(function (err) {
        if(err) res.render("celebrities/new")
        else res.redirect("/celebrities")
                
    })
})

router.post("/celebrities/:id/delete", (req,res, next)=> {
    let celebId = req.params.id

    Celebrity.findByIdAndRemove(celebId)
        .then( res.redirect("/celebrities"))
        .catch(err => {
        next(err)
    })  
})

// Edit celebrity
router.get("/celebrities/edit/:id", (req,res)=> {
    let celebId = mongoose.Types.ObjectId(req.params.id)

    Celebrity.find({_id: celebId})
        .then((celeb)=> {
            console.log(celeb)
            res.render("celebrities/edit", {celebrity: celeb[0]})
        })
        .catch((err)=> {
            res.send("error")
        })
    // else res.redirect("/celebrities")
})

router.post("/celebrities/:id", (req,res)=> {
    let newCelebrity = {
        name:req.body.name,
        occupation:req.body.occupation,
        catchPhrase:req.body.catchPhrase
    }
    
    Celebrity.updateOne({_id: req.params.id}, newCelebrity)
    .then( res.redirect("/celebrities"))
    .catch(err => {
    next(err)
   }) 
})

module.exports = router;