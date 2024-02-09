//synchronus way of doing things 
var a = 10;
var b = 20;

function sum(a, b) {
  console.log(a + b);
  return a + b;
}

function multiply(a, b) {
  console.log(a*b);
 
}

sum(a,b);
multiply(a,b);

setTimeout(()=>{
  //logic to implement here
},3000)
  // delay 