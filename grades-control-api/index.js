import express from "express";
import gradesRouter from "./routes/grades.js";
import { promises as fs } from "fs";

//vamos estar desistruturando
const { readFile , writeFile } = fs;

global.fileName = "grades.json";

const app = express();
app.use(express.json());

app.use("/grade", gradesRouter);

app.listen(3000, async ()=>{
    try {
        await readFile(global.fileName);
        console.log("Api Started !");
    } catch (error) {
        
        const initialJson ={
            nextId: 1,
            grades: []
        }
        writeFile(global.fileName, JSON.stringify(initialJson)).then(()=>{
            console.log("Api Started and File Created!");
        }).catch(error =>{
            console.log(error);
        });
    }
});