const express = require('express');
const routes = express.Router();
const getCharById = require('../controllers/getCharById');
//const {save, deleteById} = require('../controllers/handleFavorites');
const login = require('../controllers/login');
const postFav = require('../controllers/postFav');
const postUser = require("../controllers/postUser");
const deleteFav = require("../controllers/deleteFav")

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
routes.get('/login', async(req, res) => {
    try {
        const {email, password} = req.query;
        if(!email || !password) {
            res.status(400).json({"Error": "Faltan datos"})
            return
        }
        
        const user = await login({email, password});
        //console.log(user.dataValues.name);
        if(user) {
            res.status(200).json({access: `true`});
            //res.status(200).json(user);
        } else {
            res.status(404).send("Usuario o contraseña incorrecta")
            //res.status(200).json({access: `false`});
        }
    } catch (error) {
        res.status(500).json({error: error.message})
    }
});

routes.post('/login',async(req, res) => {
    try {
        const {name, email, password, phone} = req.body;
        if (!name || !email || !password || !phone) {
            res.status(400).send("Faltan datos")
        } else {
            const user = await postUser({name, email, password, phone});
            res.status(201).json(user)
        }
        
    } catch (error) {
        res.status(500).json({error: error.message})
    }
})


routes.post('/fav', async(req, res) => {
    
    try {
        let { name, status, species, origin, gender, image } = req.body
        console.log("Aca", name, status, species, origin, gender, image);
        if(!name || !image || !gender || !species || !origin || !status) {   
            res.status(401).send("Faltan datos")
            return
        }
        let allFavs = await postFav({
            name,
            image,
            gender,
            status,
            species,
            origin    
        })
    
        return res.status(200).json(allFavs)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
});

routes.delete('/fav/:id', async(req, res) => {
    let { id } = req.params
    try {
        const deletedFav = await deleteFav(id);
        res.status(200).json(deletedFav)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})


module.exports = routes;