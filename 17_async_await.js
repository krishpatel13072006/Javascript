//async is used with asynchronous function
function getdata(val){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(val);
            resolve();
        },3000);
    })
}

(async ()=>{
    console.log("gatting data 1");
    await getdata(1);
        console.log("gatting data 2");
    await getdata(2);
        console.log("gatting data 3");
    await getdata(3);
        console.log("gatting data 4");
    await getdata(4);
        console.log("gatting data 5");
    await getdata(5);
})
();
// node 16_async_await.js