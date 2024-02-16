function square(a){
    return a*a;
}
function cube(a){
    return a*a*a;
}
// with the use of call backs 
function sumOfCallbacks(a,b,callback){
    let finalVal=callback(a)+callback(b);
    return finalVal;
}