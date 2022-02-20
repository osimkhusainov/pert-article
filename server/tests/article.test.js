const request = require("supertest");
const app = require("../app");

test("should create new article", async () => {
  await request(app)
    .post("/articles")
    .send({
      heading: "AutomationTest",
      content: "unit test by jest",
    })
    .expect(201);
});

test("should get all articles", async () => {
  await request(app).get("/articles").expect(200);
});
