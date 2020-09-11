console.log("Hello World!")

var http = require('http');
var server = http.createServer(function(req,res)
{
    res.writeHead(200,
        {"Content-Type":"text/plain"});

});

server.listen(3000);