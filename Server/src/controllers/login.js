const{ User } = require("../DB_connection");

const login = async ({email, password}) => {
    
        const user = await User.findOne({
            where: {
                email: email, // se puede poner solo email
                password: password
            }
        });
        return user
    
}

module.exports = login;