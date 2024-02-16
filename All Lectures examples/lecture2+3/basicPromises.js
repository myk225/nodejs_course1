// syntax to create a promise in js
const fs=require('fs');
const myFirstPromise=new Promise(function(resolve,reject){
    // console.log("hello i am trying to declare a promise");
    fs.readFile('../lecture1/text.tx',(err,data)=>{
       if(err){
        reject(err);
       }else{
        resolve(data);
       }
    })
    
})
// console.log(myFirstPromise);

myFirstPromise.then((value)=>{
    console.log(value);
}).catch((err)=>{
    console.log(err.path);
})
