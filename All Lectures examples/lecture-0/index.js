const { myFunction1,myFunction2,FnClass } = require("./exportFns");
let executer=new FnClass();
console.log(executer.name);
console.log(executer.info())