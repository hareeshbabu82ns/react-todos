const express = require('express');
const path = require('path');
const fs = require('fs');
const axios = require('axios');
const _ = require('lodash');

const api = express.Router();

const jsonServer = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 1000
  // headers: { 'X-Custom-Header': 'foobar' }
});

let todos = [];

api.get('/todos', (req, res) => {
  jsonServer.get('/todos')
    .then((response) => res.send(response))
    .catch((err) => console.log);
  // if (todos.length > 0)
  //   res.send(todos);
  // else {
  //   fs.readFile('./server/data.json', (err, data) => {
  //     if (err) {
  //       todos.splice(0);
  //       console.log(err.message);
  //     } else
  //       todos = JSON.parse(data.toString());
  //     res.send(todos);
  //   });
  // }
});

api.get('/todos/:id', (req, res) => {
  jsonServer.get('/todos', req.params)
    .then((response) => res.send(response))
    .catch((err) => console.log);
});
api.post('/todos/:id', (req, res) => {
  // jsonServer.get(/todos/' + req.params.id)
  //   .then((response) => res.send(response))
  //   .catch((err) => console.log);
});


module.exports = api;