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

function getBalance(statement) {
  const balance = statement.reduce((acc, operation) => {
    if (operation.type === "credit") {
      return acc + operation.amount;
    } else {
      return acc - operation.amount;
    }
  }, 0);

  return balance;
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

  console.log(description)
  customer.statement.push(statementOperation);
  return response.status(201).send();
})

app.post("/whithdraw", verifyIfExistAccountCpf, (request, response) => {
  const { amount } = request.body;
  const { customer } = request;
  console.log(amount);
  //statement é onde ficam nossas operações
  const balance = getBalance(customer.statement);
  if (balance < amount) {
    return response.status(400).json({ error: "Insufficient Funds!" })
  }
  const statementOperation = {
    amount,
    created_at: new Date(),
    type: "debit",
  }
  customer.statement.push(statementOperation);
  return response.status(201).send();

})

app.get("/statement/date", verifyIfExistAccountCpf, (request, response) => {
  const { customer } = request;
  const { date } = request.query

  const dateFormat = new Date(date + " 00:00")

  const statement = customer.statement.filter((statement) => statement.created_at.toDateString() ===
    new Date(dateFormat).toDateString())

  return response.json(customer.statement);
})

app.put("/account", verifyIfExistAccountCpf, (request, response) => {
  const { name } = request.body
  const { customer } = request;

  customer.name = name;

  return response.status(201).send();
})

app.delete("/account", verifyIfExistAccountCpf, (request, response) => {
  const { customer } = request;

  //splice
  customers.splice(customer, 1);
  return response.status(200).json(customers);
})


app.listen(3333);