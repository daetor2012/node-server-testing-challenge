const usersModel = require("./users-model")
const db = require("../database/config")

beforeEach(async () => {
    await db.seed.run()
})

test("insert", async () => {
    const res = await usersModel.insert({ username: "daetor2010", password: "haha" })
    expect(res.username).toBe("daetor2010")
})

test("findById", async () => {
    const res = await usersModel.findById(2)
    expect(res.username).toBe("daetor2015")
})

test("remove", async () => {
    await usersModel.remove(1)
    const users = await db("users").select()
    expect(users).toHaveLength(1)
})