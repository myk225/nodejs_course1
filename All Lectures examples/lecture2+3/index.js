// we want to eat maggie 
// get maggie
// cook maggie
// serve maggie
// eat maggie


function getMaggie(cookMaggie){
    setTimeout(()=>{
        const maggiePacket=`Maggie 🍚`;
    console.log(`1 ${maggiePacket} done`);
    cookMaggie(maggiePacket);
    },1000)

}
function cookMaggie(maggiePacket,callback){
    setTimeout(()=>{
        const cookedMaggie=`${maggiePacket} 🍝`;
    console.log(`2 ${cookedMaggie} done`);
    //callback 
    callback(cookedMaggie);
    },2000)
}

function serveMaggie(cookedMaggie,cb){
    setTimeout(()=>{
        const servedMaggie=`${cookedMaggie} 🍜`;
        console.log(`3 ${servedMaggie} done`);
        cb(servedMaggie);
    },800)
}
function eatMaggie(servedMaggie){
    setTimeout(()=>{
        console.log(` 4 ${servedMaggie} eating maggie done`);
    },400)
}

// calling functions
getMaggie((packet)=>{
    cookMaggie(packet,(cookedMaggie)=>{
        serveMaggie(cookedMaggie,(data)=>{
            eatMaggie(data);
        });
    });
})