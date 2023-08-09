const express = require('express')
const app = express();
const pets = require('./data.js')

//get all the pets from the list on data.js in the public folder
//route will be /pets

app.get('/pets', (req, res) => {
    const petInfo = pets.map((pet) =>
        `<h1>${pet.name}</h1>
        <p>Breed: ${pet.breed}</p>
        <p>Age: ${pet.age}</p>
        <p>Owner: ${pet.owner}</p>`).join(' ')
    res.send(petInfo)
})
app.get('/pets/:name', (req, res) => {
    const petName = req.params.name;
    const singlePet = pets.find(pet => pet.name.toLowerCase() === petName.toLowerCase());
    if(!singlePet) {
        res.send(`<h1>error: no pet found</h1> `)
    } else {
        const petDetails =  `<h1>${singlePet.name}</h1>
        <p>Breed: ${singlePet.breed}</p>
        <p>Age: ${singlePet.age}</p>
        <p>Owner: ${singlePet.owner}</p>`
        res.send(petDetails)
    }
})
// app.get('/pets', (req, res) => {
//     res.sendFile(__dirname + '/index.html')
// })

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});