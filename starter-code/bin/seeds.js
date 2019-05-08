const mongoose = require("mongoose");
const Celebrity = require('../models/celebrity');
const Movie = require('../models/movie');

mongoose.connect('mongodb://localhost/imdb', {useNewUrlParser: true}, (err)=> {
    if(err) console.log(err)
    else console.log('connected to db')
});

// let celebritySeed = [
//     {
//         name: 'John Turturro',
//         occupation: 'American actor',
//         catchPhrase: 'Nobody fucks with the Jesus'
//     },
//     {
//         name: 'Brad Pitt',
//         occupation: 'American actor',
//         catchPhrase: 'Gentlemen, welcome to Fight Club. The first rule of Fight Club is: you do not talk about Fight Club. The second rule of Fight Club is: you DO NOT talk about Fight Club! '
//     },
//     {
//         name: 'Sean Connery',
//         occupation: 'Scottish actor',
//         catchPhrase: 'My name is Bond, James Bond.'
//     }

// ]

// Celebrity.remove({}, ()=> {
//     for (let i = 0; i < celebritySeed.length; i++) {
//         const element = celebritySeed[i];
//         Celebrity.create(element)
//     }
// })

let movieSeed = [
{
    title: "The Big Lebowski",
    genre: "Crime, Indie",
    plot: "Jeff `The Dude' Leboswki is mistaken for Jeffrey Lebowski, who is The Big Lebowski. Which explains why he's roughed up and has his precious rug peed on. In search of recompense, The Dude tracks down his namesake, who offers him a job. His wife has been kidnapped and he needs a reliable bagman. Aided and hindered by his pals Walter Sobchak, a Vietnam vet, and Donny, master of stupidity."
},
{
    title: "Dr No",
    genre: "Drama, Action",
    plot: "A depressed man (Edward Norton) suffering from insomnia meets a strange soap salesman named Tyler Durden (Brad Pitt) and soon finds himself living in his squalid house after his perfect apartment is destroyed. The two bored men form an underground club with strict rules and fight other men who are fed up with their mundane lives. Their perfect partnership frays when Marla (Helena Bonham Carter), a fellow support group crasher, attracts Tyler's attention."
},
{
    title: "Dr. No",
    genre: "Mystery, Thirller",
    plot: "In the film that launched the James Bond saga, Agent 007 (Sean Connery) battles mysterious Dr. No, a scientific genius bent on destroying the U.S. space program. As the countdown to disaster begins, Bond must go to Jamaica, where he encounters beautiful Honey Ryder (Ursula Andress), to confront a megalomaniacal villain in his massive island headquarters"
}
]
Movie.remove({}, ()=> {
    for (let i = 0; i < movieSeed.length; i++) {
        const element = movieSeed[i];
        Movie.create(element)
    }
})