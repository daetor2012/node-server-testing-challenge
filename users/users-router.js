const express = require("express")
const users = require("./users-model")

const router = express.Router()

router.post("/", async (req, res, next) => {
    try {
        const post = await users.insert(req.body)
        res.status(201).json(post)
    } catch(err) {
        next(err)
    }
})

router.delete("/:id", async (req, res, next) => {
    const { id } = req.params
    
    try {
        const deleted = await users.remove(id)
        if(deleted === 1) {
            res.status(200).json({ message: "User deleted" })
        } else res.status(404).json({ message: "User doesn't exist" })
        
    } catch(err) {
        next(err)
    }
    
    
})

router.get("/", async (req, res, next) => {
    try {
        res.json(await users.getAll())
    } catch(err) {
        next(err)
    }
})

module.exports = router;