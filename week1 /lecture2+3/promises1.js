// basic syntax to create a promise

const myFirstPromise=new Promise(function(reslove,reject){
    // console.log("my first promise");
   const error=true;
   if(error){
    reject({message:"failed to login"});
   }else{
    reslove({username:"yaseen",token:"djsbfjsdnfkodsfnokdsnfksdkn"});
   }
   
})

async function login(){
    try {
        const data=await myFirstPromise;
    console.log(data); 
    } catch (error) {
        console.log(error)
    }
   
}

login();
// promise
// reslove -- fullfilment 
// reject -- error
// then , catch 

// myFirstPromise.then((value)=>{
//     console.log(value);
// }).catch((err)=>{
//     console.log(err)

// })