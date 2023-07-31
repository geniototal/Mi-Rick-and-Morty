const http = require("http");
const data = require("./utils/data")

http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    const { url } = req;
    
    if (url.includes(`/rickandmorty/character`)) {
        
        let aux = url.split("/");
        let idUrl = aux[aux.length -1];
        let chart = data.find((element)=> element.id === parseInt(idUrl));
        console.log(chart);
        
    
        res.writeHeader(200, {'Content-types': 'appication/json'});
        return res.end(JSON.stringify(chart));
    }

    res.writeHeader(400);
    res.end();
})
.listen(3001, "localhost");