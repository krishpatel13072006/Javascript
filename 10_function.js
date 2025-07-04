// node 10_function.js

function power(a,b)
{
    // console.log(a**b);
}
// power(2,3);

let vowel_counter = (str) => {
    let count=0;
    for(let char of str )
    {
        if(char=="a" || char=="e" || char=="i" || char=="o" || char=="u" ||char=="A" || char=="E" || char=="I" || char=="O" || char=="U")
        {
            count++;
        }
    }

    console.log(count)

}
// vowel_counter("Good Mroning BEAUTIFUL");


//filter method
let a1=[1,2,3,4,5,6];
let even_num=(num)=>{
        return num%2!=0; 
}
let newarr=a1.filter(even_num);
// console.log(newarr);


//reduce method
let summ=a1.reduce((result,curr_val)=>{
  return result+curr_val;
});
// console.log(summ);


let greater=a1.reduce((result,curr_val)=>{

  return (result>curr_val?result:curr_val);

});
// console.log(greater);

let arr=[];
for(let i=1;i<=10;i++)
{
    arr.push(i);
}
console.log(arr);