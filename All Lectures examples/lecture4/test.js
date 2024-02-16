// basic http server using nodejs http module
const http=require('http');

const Server=http.createServer(function(req,res){
    console.log(req.url);
    res.end("something");
})

Server.listen("8000",()=>{
    console.log("started");
})