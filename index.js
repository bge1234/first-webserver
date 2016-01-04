// // requires Node's `http` module
// var http = require('http');
//
// // Declares a function that gets invoked on every request
// function handleRequest(req, res) {
//   res.setHeader("Content-Type", "text/plain");
//   res.end("Cho, I'll take two packets of sugar.");
// }
//
// // Creates an instance of a server with our callback
// var server = http.createServer(handleRequest);
//
// // Binds our server to a port, host, and then logs a message
// server.listen(8000, 'localhost', function() {
//   console.log("Listening on port 8080");
// });
//
// //Navigate to http://localhost:8000 to run

// var http = require('http');
//
// function handleRequest(req, res) {
//   if (req.url === '/special-message') {
//     res.end("You're SPECIAL?!");
//   } else if (req.url === '/non-special-message') {
//     res.end("You're boring!");
//   } else {
//     res.end(req.url);
//   }
// };
//
// var server = http.createServer(handleRequest);
//
// server.listen(8000, function() {
//   console.log("Listening...")
// });

var http   = require('http');
var routes = require('./routes');

var handleRequest = function (req, res) {
  if(routes[req.url] === undefined) {
    routes[req.url](req, res);
  } else {
    res.end("404, no such route");
  }
};

var server = http.createServer(handleRequest);

server.listen(8000, function() {
  console.log("Listening...");
});
