const express = require('express');
const routes = express.Router();
const getCharById = require('../controllers/getCharById');
const {save, deleteById} = require('../controllers/handleFavorites');
const login = require('../controllers/login');

routes.get('/character/:id', async(req, res) => {
    const {id} = req.params;
    try {
        let character = await getCharById(id)
        
        if(character?.name) {
            res.status(200).json(character)
        } else {
            res.status(404).json({"error": "No se encontro un personaje con ese id"})
        }
    } catch {
        res.status(500).json({"error": "Fallo de coneccion con la api"})
    }
});
routes.get('/login', (req, res) => {
    const {email, password} = req.query;
    if(!email || !password) {
        res.status(400).json({"Error": "Faltan datos"})
        return
    }
    
    const user = login(email, password);
    if(user) {
        res.status(200).json({access: `true`});
    } else {
        res.status(200).json({access: `false`});
    }
});
routes.post('/fav', (req, res) => {
    
    let { id, name, status, species, gender, origin, image } = req.body
    
    let newFav = {
        id: id,
        name: name,
        image: image,
        gender: gender,
        status: status,
        species: species,
        // origin: origin
    }
    let values = Object.keys(newFav) // ["id", "name"]
    
    for(let i = 0; i < values.length; i++) {
        if(!newFav[values[i]]) {
            
            res.status(404).send("Me mandaste cualquier cosa")
            return
        }
    }
    return res.status(200).send(save(newFav))
});
routes.delete('/fav/:id', (req, res) => {
    let { id } = req.params

    res.status(200).send(deleteById(id))
})


module.exports = routes;