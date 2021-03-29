import express from "express";
import { promises as fs } from "fs";

const { readFile, writeFile } = fs;

const router = express.Router();

router.post("/", async (req, res) => {
    try {
        let account = req.body;
        const data = JSON.parse(await readFile("accounts.json"));
        
        //precisa colcoar a informação completa , falta o id


        account = {id: data.nextId++, ...account };
        // account.id = data.nextId;
        // data.nextId++
        data.accounts.push(account);

        await writeFile("accounts.json", JSON.stringify(data, null , 2));
        res.send(account);
    } catch (error) {
        res.status(400).send({error: error.message});
    }
});

router.get("/", async (req, res)=>{
    try{
        const data = JSON.parse(await readFile("accounts.json"));
    } catch(err){
        res.status(400).send({error: err.message });
    }
})



export default router;