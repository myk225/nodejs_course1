let myFunction1=()=>{
    console.log("I am firrst funvtion");
}
let myFunction2=()=>{
    console.log("I am second fn")
}
console.log("i am going to be exportedd");

module.exports={
    name:"myFunctions",
    myFunction1,
    myFunction2,
    FnClass:function (){
        this.name="testing",
        this.info=()=>{
            console.log(`I am a function,my name is ${this.name} but i behave as a class`);
            return "yaseens function";
        }
        return "thanks for trying me";
    }
}