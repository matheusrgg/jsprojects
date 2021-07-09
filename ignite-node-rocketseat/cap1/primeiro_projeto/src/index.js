const { response } = require("express");
const express = require("express")
// por que não posso usar import express from "express" ???????
const { v4: uuidv4 } = require("uuid")

const app = express();
app.use(express.json());

const customers = []

app.post("/account", (req, res) => {
  // return res.json({ message: "hellow world" })
  const { cpf, name } = req.body;

  const customerAlreadyExists = customers.some(
    (customer) => customer.cpf === cpf
  );
  if (customerAlreadyExists) {
    return res.status(400).json({ error: " Customer already exists" })
  }

  const id = uuidv4();
  customers.push({
    cpf,
    name,
    id,
    statement: []
  })

  return res.status(201).send();
});

app.get("/statement/:cpf", (req, res) => {
  const { cpf } = request.params;
  const customer = customers.find((customer) => customer.cpf === cpf)
  return res.json(customer.statement);

})

app.listen(3333);