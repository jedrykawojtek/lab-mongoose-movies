const express = require('express');
const router = express.Router();
const Celebrity = require('../models/Celebrity');


//what kind of route this is - dynamic
//how do we get the specific id:
// 1. file: index.hbs
// 2. object: req.params 
router.get("/celebrities/:id", (req,res)=> {
    let celebId = req.params.id

    //what we are looking for in the database: for a specific document 
    //which value we are searching by : (by ID)
    Celebrity.findById(celebId)
    .then( result => {
        //render function takes two parameters:
        // 1. path ("celebrities/celebrity01.hbs")
        // 2. specific celebrity
        res.render("celebrities/celebrity01", {firstCelebrity : result})
    })
    .catch(err => {
        res.send(err)
   })

})
   

module.exports = router;