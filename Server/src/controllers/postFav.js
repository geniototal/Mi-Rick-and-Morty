const{ Favorite } = require("../DB_connection");

const postFav = async({ name, status, species, gender, origin,image }) => {
    await Favorite.findOrCreate({ where : { name, status, species, origin, gender, image }})
    const allFavs = await Favorite.findAll()
    return allFavs
};

module.exports = postFav;