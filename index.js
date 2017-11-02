var fs = require('fs');
var http = require('http');

var server = http.createServer();

server.on('request', function (request, response) {
  response.setHeader("Content-Type", "text/html; charset=utf-8");
  if (request.method === 'GET' && request.url === '/') {
    fs.readFile('./index.html', function(err, data) {
      response.write(data);
      response.end();
    });
} else {
    response.statusCode = 404;
    fs.readFile("404.png", "binary", function(error, file) {
      response.writeHead(200, {"Content-Type": "image/png"});
      response.write(file, "binary");
      response.end();
      });
    }
});

server.listen(8080);
