// Basic Setup Steps

  // Import the http module
// var http = require('http');
//
//   // Handle sending requests and returning responses
// function handleRequests(req, res){
//   // return string
//   res.end('Hello World!');
//
// }
//
//   // Create the server
// var server =  http.createServer(handleRequests);
//
//   // start server and listen on specified port
// server.listen(8080, function(){
//   console.log('Listening on port 8080');
// })

//////////EXPRESS APPROACH////////////
var express = require('express');
var expressLayouts = require('express-ejs-layouts');
var bodyParser = require('body-parser');
var app = express();
var port = 8080;

// ue ejs and express-layouts
app.set('view engine', 'ejs');
app.use(expressLayouts); // looks for layout.ejs file

// use bodyParser - use urlencoded which allows us to use encoded urls on the body object
app.use(bodyParser.urlencoded({ extended: false }));

var router = require('./app/routes'); // tells where to look for routes

app.use('/', router); // app.use is an Express Middleware; telling app to use routes.js to load any file

// set static files
app.use(express.static(__dirname + '/public'))

//Start server
app.listen(port, function(){
  console.log('app started');
});
