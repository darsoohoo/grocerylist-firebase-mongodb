const request = require("request");
const server = require("../../server");
const base = "http://localhost:5000/topics/";

describe("routes : items", () => {

    

  describe("GET /items", () => {

    it("should return a status code 200", (done) => {
      request.get(base, (err, res, body) => {
        expect(res.statusCode).toBe(200);
        done();
      });
    });

  });





  
});