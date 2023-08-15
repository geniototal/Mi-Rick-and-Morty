const axios = require('axios');

const URL = `https://rickandmortyapi.com/api/character/`;

const getCharById = (id, res) => {
  
  axios.get(URL + id)
  .then((response) => response.data)
  .then((data) => {
    const character = {
      id: data.id,
      name: data.name,
      gender: data.gender,
      species: data.species,
      origin: data.origin?.name, //pregunto porque no todos los personajes tienen origen
      image: data.image,
      status: data.status
    }
    if(character) {
      res.status(200).json(character)
    } else {
      res.status(404).send('Not fount')
    }
  
  } )
  .catch((error) => {
    res.status(500).send(error.message);
  })
}

module.exports = getCharById;


/* const axios = require('axios');

const URL = 'https://rickandmortyapi.com/api/character/';

const getCharById = (res, id) => {
  axios.get(URL + id)
  .then((response) => response.data)
  .then((data) => {
// .then({data}) probar si funciona haciendo destructuing
    console.log(data);
    const character = {
        id: data.id,
        name: data.name,
        gender: data.gender,
        species: data.species,
        origin: data.origin?.name, //pregunto porque no todos los personajes tienen origen
        image: data.image,
        status: data.status
    }
    res.writeHeader(200, {'Content-types': 'appication/json'});
        return res.end(JSON.stringify(character)); //en el video no pòne return
  }
  )
  .catch((error) => {
    console.log('estoy aca');
    console.log(error.message)
    /* res.writeHeader(500, {'Content-types': 'aplication/json'});
    return res.end({error: error.message}) */
    /*res.writeHeader(500, {'Content-types': 'text/plain'});
    return res.end(error.message)// en el video no pone return
} )
}
module.exports= getCharById; */