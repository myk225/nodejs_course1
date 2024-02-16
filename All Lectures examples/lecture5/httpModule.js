//now we are gonna make a server using http module 

const http=require('http');

const Server=http.createServer((req,res)=>{
    
   
    if(req.url==="/"){
       
        return  res.end("welcome to our homepaage");
    }
    if(req.url==="/about"){
        return res.end("This is about page");
    }
    if(req.url==="/welcome"){
return res.end(`<h1>welcome !!!</h1>`)

    }
    res.end(`
        <h1>OPPS! SOME THING WENT WRONG </h1>
        <p>error </p>
        <a href="/">home</a>
        `)
})
const port=8000;
Server.listen(port,()=>console.log(`listeing on ${port}`))