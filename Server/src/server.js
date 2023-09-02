const express = require('express');
const server = express();
const routes = require('./routes/index');
const cors = require('cors')


server.use(cors())
server.use(express.json());

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
       'Access-Control-Allow-Headers',
       'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
       'Access-Control-Allow-Methods',
       'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
 });

 server.use('/rickandmorty', routes)
module.exports = server;



/* const http = require("http");
//const data = require("./utils/data")
const getCharById = require('./controllers/getCharById')

http.createServer((req, res) => {
    
    res.setHeader('Access-Control-Allow-Origin', '*');
    
    if (req.url.includes('/rickandmorty/character')) {
        
        //const { url } = req;
        let aux = req.url.split("/");
        let idUrl = aux[aux.length -1]; // otro metodoes usa .at(-1)
        let id = parseInt(idUrl);
        getCharById(res, id)
    }
    /* if (url.includes(`/rickandmorty/character`)) {
        
        let aux = url.split("/");
        let idUrl = aux[aux.length -1];
        let chart = data.find((element)=> element.id === parseInt(idUrl));
        console.log(chart);
        
    
        res.writeHeader(200, {'Content-types': 'appication/json'});
        return res.end(JSON.stringify(chart));
    } */
    /*else {
    res.writeHeader(400);
    res.end();
    }
})
.listen(3001, "localhost");//Otra manera .listen(3001,()=> console.log('El servidor esta funcionando')) */

