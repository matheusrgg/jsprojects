import express from "express";
import { promises as fs, write } from "fs";
const { readFile, writeFile } = fs;
const router = express.Router();



router.post("/", async (req, res)=>{
    try{
        let grade = req.body;
        const data = JSON.parse(await readFile(global.fileName));

        grade = {id: data.nextId++,...grade };
        data.grades.push(grade);
    

        await writeFile(global.fileName, JSON.stringify(data));

        res.send(grade);
    } catch(err){
        res.status(400).send({error: err.message });
    }
});



router.get("/", async (req, res)=>{
    try{
        const data = JSON.parse(await readFile(global.fileName));
        // delete data.nextId;
        res.send(data);
    } catch(err){
        res.status(400).send({error: err.message });
    }
});



router.get("/totalGrade", async (req, res)=>{
 
    async function totalGrade(){
        const readStudentSubject = JSON.parse( await fs.readFile(global.fileName));
        const studentSubject = readStudentSubject.map( grades =>{
            return{
                student: grades.student,
                subject:grades.subject
            }
        })
    }
    totalGrade();
});



export default router;