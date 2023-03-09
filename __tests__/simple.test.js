//NOT WORKING RIGHT NOW
//FIXME: https://jaygould.co.uk/2020-07-28-jest-sequelize-testing-dedicated-database/

const request = require("supertest");
const Sequelize = require("sequelize");
const app = require("../server");

require("dotenv").config();

describe("Initial test", () => {
  it("1+1=2", () => {
    expect(1 + 1).toEqual(2);
  });
});

/* Connecting to the database before each test. */
beforeAll(async () => {
  await thisDb.sequelize.sync({ force: true });
});

describe("GET /", () => {
  it("should return all games", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
  });
});
