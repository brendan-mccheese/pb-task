import { app } from "./express/app";
import request from "supertest";

describe("GET /convert-number", () => {
    it("with valid number param, responds with result", done => {
        request(app)
            .get("/convert-number?number=1234")
            .expect(
                200,
                {
                    result: "one thousand two hundred and thirty four",
                },
                done,
            );
    });

    it("with no number param, responds with 400", done => {
        request(app)
            .get("/convert-number")
            .expect(400)
            .end(() => done());
    });

    it("with invalid number param, responds with 400", done => {
        request(app)
            .get("/convert-number?number=foo")
            .expect(400)
            .end(() => done());
    });
});
