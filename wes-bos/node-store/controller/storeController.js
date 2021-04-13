const mongoose = require('mongoose');
const store = mongoose.model('Store');


exports.homePage = (req, res) => {
  console.log(req.name);
  res.render('index');
};

exports.addStore = (req, res) => {
  res.render('editStore', { title: 'Add Store' });
};

exports.createStore = (req, res) => {
  //res.json(req.body);
  const store = new Store(req.body);
  await store.save();
  console.log('It worked');
};

