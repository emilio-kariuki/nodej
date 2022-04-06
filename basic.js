var http = require('http');

var module = require('./module');
function makeRequest(request,response){
    response.writeHead(200,{'Content-Type':'text/plain'});
    response.write("Hello world");
}


http.createServer(makeRequest).listen(8080);