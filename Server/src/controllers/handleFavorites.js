let db = []

const save = (newFav) => {
    console.log(newFav);
    db.push(newFav)
    console.log("base de datos " + db[0].name);
    return db
}

let deleteById = (id) => {
    db = db.filter(char => char.id !== Number(id))

    return db
}

module.exports = { save, deleteById }