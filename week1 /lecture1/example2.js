function square(a){
    return a*a;
}
function cube(a){
    return a*a*a;
}

// with out call backs in example3.js file we can see how callbacks help in this case
function sumOfSquares(a,b){
    let finalVal=square(a)+square(b);
    return finalVal;
}
function sumOfCubes(a,b){
    let finalVal=cube(a)+cube(b);
    return finalVal;
}
console.log(sumOfSquares(5,9));
console.log(sumOfCubes(5,9));



