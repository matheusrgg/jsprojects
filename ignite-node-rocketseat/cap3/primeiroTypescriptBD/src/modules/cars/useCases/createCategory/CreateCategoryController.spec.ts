import  request  from "supertest";

import { app } from "@shared/infra/http/app";
import { response } from "express";

describe("Create Category Controller ", async () =>{


    it("Should be able too create a new Category ", async () =>{
        await request(app)
        .post("/categories")
        .send({
          name: "Category Supertest",
          description: "Category Supertest",
        })

        expect(response.status).toBe(201);
    });
});