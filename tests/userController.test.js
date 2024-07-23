// tests/userController.test.js
const request = require("supertest");
const app = require("../app");
const sequelize = require("../config/database");

beforeAll(async () => {
  await sequelize.sync({ force: true });
});

describe("User Endpoints", () => {
  it("should create a new user", async () => {
    const res = await request(app).post("/users").send({
      name: "John Doe",
      email: "john@example.com",
      password: "123456",
    });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty("id");
  });

  it("should fetch all users", async () => {
    const res = await request(app).get("/users");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveLength(1);
  });

  it("should fetch a single user", async () => {
    const res = await request(app).get("/users/1");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("id");
  });

  it("should update a user", async () => {
    const res = await request(app).put("/users/1").send({
      name: "John Updated",
      email: "john.updated@example.com",
      password: "654321",
    });
    expect(res.statusCode).toEqual(200);
    expect(res.body.name).toBe("John Updated");
  });

  it("should delete a user", async () => {
    const res = await request(app).delete("/users/1");
    expect(res.statusCode).toEqual(200);
  });
});
