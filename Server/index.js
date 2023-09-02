const server = require('./src/server');
const {conn, User} = require('./src/DB_connection')
const PORT = 3001;
//require("./src/DB_connection")

conn.sync({force: false})
.then(()=> {
    server.listen(PORT, () => {
        console.log('Server run in port: ' + PORT);
     });
})
