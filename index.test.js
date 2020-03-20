const supertest = require("supertest")

const server = require("./index")
const db = require("./database/config")

beforeEach(async () => {
    await db.seed.run()
})

test("welcome route", async () => {
    const res = await supertest(server).get("/")
    expect(res.statusCode).toBe(200)
})

test("create user", async () => {
    const res = await supertest(server)
        .post("/users")
        .send({ username: "david", password: "password" })
    expect(res.statusCode).toBe(201)
    expect(res.type).toBe("application/json")
    expect(res.body.username).toBe("david")
    expect(res.body.password).toBe("password")
})