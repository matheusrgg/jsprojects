const express = require("express")
// por que não posso usar import express from "express" ???????
const app = express();
const { v4: uuidv4 } = require("uuid")

app.use(express.json());


app.get("/", (req, res) => {
  return res.json({ message: "hellow world" })
});

app.listen(3333);