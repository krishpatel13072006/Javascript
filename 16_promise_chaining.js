function async1(val)
{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log(val);
            resolve("Executed");
        }, 4000);
    })
}

async1(1).then((res1)=>{
    console.log(res1);
    return async1(2).then((res2)=>{
        console.log(res2);
        return async1(3).then((res3)=>{
            console.log(res3);
            console.log("All data fetched!!")
        })
    })
})

// node 16_promise_chaining.js