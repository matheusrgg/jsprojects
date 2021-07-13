const express = require('express');
const cors = require('cors');

const { v4: uuidv4 } = require('uuid');

const app = express();

app.use(cors());
app.use(express.json());

const users = [];

function checksExistsUserAccount(request, response, next) {
  const { username } = request.headers;

  const user = users.find(user => user.username === username)
  if (!user) {
    return response.status(404).json({ error: "Mensagem do erro" })
  }

  request.user = user;
  return next();

}

app.post('/users', (request, response) => {

  const { name, username } = request.body;

  const userExists = users.find(user => user.username === username)
  if (userExists) {
    return response.status(400).json({ error: "Mensagem do erro" })
  }

  const user = {
    id: uuidv4(), // precisa ser um uuid
    name,
    username,
    todos: []
  };

  users.push(user);

  return response.status(201).json(user);
});

app.get('/todos', checksExistsUserAccount, (request, response) => {
  const { user } = request;
  return response.json(user.todos)
});

app.post('/todos', checksExistsUserAccount, (request, response) => {
  // Complete aqui
  const { title, deadline } = request.body;
  const { user } = request;

  const todoOperation = {
    id: uuidv4(), // precisa ser um uuid
    title: title,
    done: false,
    deadline: new Date(deadline),
    created_at: new Date()
  }

  user.todos.push(todoOperation);
  return response.status(201).json(todoOperation);
});


app.put('/todos/:id', checksExistsUserAccount, (request, response) => {
  const { title, deadline } = request.headers;
  const { id } = request.params
  const { user } = request;

  const todo = user.todos.find(todo => todo.id === id)
  if (!todo) {
    return response.status(404).json({ error: "Todo not found" });
  }
  todo.title = title;
  todo.deadLine = new Date(deadline);
  return response.json(todo);

});

app.patch('/todos/:id/done', checksExistsUserAccount, (request, response) => {

  const { id } = request.params
  const { user } = request;

  const todo = user.todos.find(todo => todo.id === id)

  if (!todo) {
    return response.status(404).json({ error: "Todo not found" });
  }

  todo.done = true;

  return response.json(todo);

});

app.delete('/todos/:id', checksExistsUserAccount, (request, response) => {
  const { id } = request.params
  const { user } = request;


  const todoIndex = user.todos.findIndex(todo => todo.id === id);
  if (todoIndex === -1) {
    return response.status(404).json({ error: "Todo not found" })
  }

  user.todos.splice(todoIndex, 1);

  return response.status(204).json();

});




module.exports = app;