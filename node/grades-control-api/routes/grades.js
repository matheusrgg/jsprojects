import express from "express";
const router = express.Router();

import { promises as fs } from "fs";
const { readFile, writeFile } = fs;


router.post("/", async (req, res)=>{
    try{
        const data = JSON.stringify(await writeFile(global.fileName));
        // delete data.nextId;
        res.send(data);
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




export default router;