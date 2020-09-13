console.log("Hello World!")
var http = require('http');
var PORT = 8080;
var server = http.createServer(function(req,res)
{   res.write("Hello Node!")
    res.end()

});


server.listen(PORT, function(error){
       if(error){
           console.log("Something went wrong")
       }
       else{
           console.log("Succesfully Connected to PORT 3000")
       }
   })

