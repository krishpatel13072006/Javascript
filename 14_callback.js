function sum(a,b){
    console.log(a+b);
}

function calculator(a,b,sum){
    sum(a,b);
}
calculator(1,2,sum);


let arr=[1,2,3,4,5,6,7,8,9,10];
let x=arr.reduce((pre,cur)=>{
    
    return pre<cur?pre:cur;
})
// console.log(x);
let y=arr.filter((pre)=>{
    
    return pre%2==0;
})
console.log(y);

function getdata(data,getnextdata){
    setTimeout(()=>{
        console.log(data);
        getnextdata();
    },2000)
    
}
getdata(1,function getnextdata(){
    getdata(2,function getnextdata(){
        getdata(3,function getnextdata(){
            getdata(4,function getnextdata(){
                console.log("all data fetched")
            })
        })
    });
});

let v=(val)=>{
   const incrementval= setInterval(()=>{
        console.log(val);
        if (val==2){
           clearInterval(incrementval);
        }
        val++
    })
}
v(1);


// node 14_callback.js
