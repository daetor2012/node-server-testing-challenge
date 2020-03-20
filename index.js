const express = require("express")
const server = express()
const port = 5000
const usersRouter = require("./users/users-router")
server.use(express.json())
server.get("/", (req, res, next) => {
    res.json({ message: "Welcome to my API" })
})
server.use("/users", usersRouter)
server.use((err, req, res, next) => {
	console.log(err)
	res.status(500).json({
		message: "Something went wrong",
	})
})
server.listen(port, () => {
    console.log(`Running on http://localhost:${port}`)
})

module.exports = server;