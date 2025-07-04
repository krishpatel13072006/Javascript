// alert("hello");
function greet(msg)
{
    return ()=>
    {
        console.log(msg);
    };

}
let t1 = greet("helo");
console.log(t1);
