const axios = require('axios');

const URL = `https://rickandmortyapi.com/api/character/`;

const getCharById = async (id) => {
  
  let res = await axios.get(URL + id)
  
    const character = {
      id: res.data.id,
      name: res.data.name,
      gender: res.data.gender,
      species: res.data.species,
      origin: res.data.origin, //pregunto porque no todos los personajes tienen origen
      location: res.data.location,
      image: res.data.image,
      status: res.data.status,
      created: res.data.created,
      episode: res.data.episode
    }
  console.log(character);
    return character 
  
  
  
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