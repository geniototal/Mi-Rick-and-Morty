const users = require('../utils/users')

const login = (email, password) => {
    
    const user = users.find(user => user.email === email && user.password === password);
    return user
}

module.exports = login;