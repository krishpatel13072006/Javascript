// alert("hello");

function greet(msg)
{
    return ()=>
    {
        console.log(msg);
    };

}
let t1 = greet("helo");
// console.log(t1);
// t1();

let arr=[100,42,5,3,6,4,7,5,8,6,9,7,0];
console.log(arr.sort((a,b)=>{
    return b-a;
}
));

