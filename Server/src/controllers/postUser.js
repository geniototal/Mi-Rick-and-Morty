const{ User } = require("../DB_connection");

const postUser = async({name, email, password, phone}) => {
    const newUser = await User.create({name, email, password, phone})
    return newUser;
}

module.exports = postUser;