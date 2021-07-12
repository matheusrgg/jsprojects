import express from "express";
// por que não posso usar import express from "express" ???????
import { v4 as uuidv4 } from "uuid";

const app = express();
app.use(express.json());

const customers = [];

//Middleware
function verifyIfExistAccountCpf(request, response, next) {
  const { cpf } = request.headers;

  const customer = customers.find((customer) => customer.cpf === cpf)

  if (!customer) {
    return response.status(400).json({ error: "Customer not found" });
  }

  request.customer = customer;
  return next();
}

app.post("/account", (request, response) => {
  // return response.json({ message: "hellow world" })
  const { cpf, name } = request.body;

  const customerAlreadyExists = customers.some(
    (customer) => customer.cpf === cpf
  );
  if (customerAlreadyExists) {
    return response.status(400).json({ error: " Customer already exists" })
  }

  // const id = uuidv4();
  customers.push({
    cpf,
    name,
    id: uuidv4(),
    statement: [],
  })

  return response.status(201).send();
});

app.get("/statement", verifyIfExistAccountCpf, (request, response) => {
  // const { cpf } = req.params;
  const { customer } = request;
  return response.json(customer.statement);
})

app.post("/deposit", verifyIfExistAccountCpf, (request, response) => {
  const { description, amount } = request.body;
  // const body = request.body;
  const { customer } = request;

  const statementOperation = {
    description,
    amount,
    created_at: new Date(),
    type: "credit",
  }

  // console.log(body)
  customer.statement.push(statementOperation);
  return response.status(201).send();
})

app.listen(3333);