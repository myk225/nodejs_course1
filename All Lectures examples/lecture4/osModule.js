const os=require('os');
// console.log(os);
// console.log(os.freemem());
// const user=os.userInfo();
// console.log(user);
// console.log(os.uptime())

const currentOs={
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
    platform : os.platform(),
    name : os.type(),
    release : os.release()
}
console.log(currentOs);