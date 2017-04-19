const express = require('express');
const path = require('path');
const fs = require('fs');
const api = require('./api');
const jsonServer = require('json-server');

const app = express();

const jsonApiRoutes = jsonServer.router('./server/data.json');
// jsonApiRoutes.render = (req, res) => {
//   res.jsonp({ body: res.locals.data });
// }


//middleware function
const logMiddleware = (req, res, next) => {
  console.log(req.url);
  next();
}


app.use(logMiddleware); //hook middleware function

app.use('/api', jsonApiRoutes);

app.use(express.static(path.resolve(__dirname, '..', 'build')));



// app.get('/pkg',(req,resp)=>{
//   resp.sendFile(path.resolve(__dirname,'..','package.json'));
// });

module.exports = app;

// // Read File Async
// console.log('file reading started');

// fs.readFile('package.json', (err, data) => {
//   if (err) {
//     console.log(err.message);
//   } else {
//     let timer = setInterval(() => {
//       clearInterval(timer);
//       console.log('File Contents \n', data.toString());
//       console.log('file reading finished');
//     }, 2500);
//   }
// });

// console.log('file reading...');

// setInterval(() => {
//   console.log('ticking...');
// }, 1000);
