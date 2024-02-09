 // this just to show a node js example we will cover this later 
 const fs=require('fs');

fs.readFile('./text.txt','utf-8',(err,data)=>{
if(err){
    console.log(err)
}else{
    console.log(data);
}
})

// fs.writeFile("./text.txt","i am trying to write something ",{flag:'a+'},(err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log("written in the file");
//     }
// })