const{ Favorite } = require("../DB_connection");

const deleteFav = async(id) => {
    const favoriteDeleted = await Favorite.findByPk(id)
    await favoriteDeleted.destroy();
    const favorites = await Favorite.findAll()
    return favorites
}

module.exports = deleteFav;