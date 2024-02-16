// fs module 
const fs=require('fs');

// console.log("i am starting");

// fs.readFile('./docs/personal/old','utf-8',(err,data)=>{
//     if(err){
//        console.log(err);
//     }else{
//         console.log(data);
        
//     }
// });
// fs.writeFile('./docs/personal/old.txt'," ==> Hello i am writefile method from fs module trying again",{flag:"a"},(err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log("written in the file")
//     }
// })
// fs.unlink('./docs/personal/new.txt', function (err) {
//     if (err) throw err;
//     console.log('File deleted!');
//   });
fs.rename('./docs/personal/rename','./docs/personal/test',(err)=>{
    if (err) throw err;
    console.log('renamed');
 })
 

// const newFile=fs.readFileSync("./docs/personal/new.txt",'utf-8');
// fs.writeFileSync("./docs/personal/write",newFile+"i am writing here");

// console.log(newFile)