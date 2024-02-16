const path=require('path');

// default sepration 
// console.log(path.sep);

// join method 
const filePath=path.join('/docs','/personal','new.txt');
console.log(filePath);

// // basename
const baseFile=path.basename(filePath);
console.log(baseFile);

// //absolute path
const absolutePath=path.resolve(__dirname,'content','personal',"new.txt");
console.log(absolutePath);
