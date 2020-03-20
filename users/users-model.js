const db = require("../database/config")

module.exports = {
    insert,
    remove,
    findById,
    getAll
}

async function insert(user) {
    const [id] = await db("users").insert(user)
    return findById(id)
}

function findById(id) {
    return db("users").where("id", id).first()
}

function remove(id) {
    return db("users").where("id", id).del()
}

function getAll() {
    return db("users").select("id", "username")
}