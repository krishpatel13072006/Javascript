let marks=[10,20,30,40,50];
console.log(marks[0]);

console.log(marks[5]);

console.log(marks[marks.length-1]);

marks[5]=60;

console.log(marks[5]);

// node 9_arrays.js

console.log(marks.length);

console.log();

for(let i=0;i<=marks.length-1;i++)
{
    console.log(marks[i]);
}
console.log();

let i=0;
while(i<marks.length)
{
    console.log(marks[i]);
    i++;
}

console.log();


function reverse(marks)
{

    let first=0;
    let last=marks.length-1;

    while(first<=last)
    {
        let temp=marks[first];
        marks[first]=marks[last];
    marks[last]=temp;

    first++;
    last--;
    }
    console.log(marks)
}

// reverse(marks);


let sum=0;
for(let i=0;i<marks.length;i++)
{
    sum=sum+marks[i];
}
console.log(sum);
let average=sum/marks.length
console.log(average);


function offf(arr)
{
let offer=0;
for(let i=0;i<arr.length;i++)
{
    offer=arr[i]/10;
    arr[i]=arr[i]-offer;
}
console.log(arr);
}
let arr=[100,200,300,400,500];
// offf(arr);

let nme="krish patel";
let rev=" ";
for(let i=nme.length;i>=0;i--)
{
    rev+=nme.at(i);
  } 
//  console.log(rev);

 console.log();


// for(let i=0;i<nme.length;i++)
// {
//     rev=nme.at(i)+rev;
// }
//     console.log(rev);

let ar=[1,2,3,4,5,6,7,8,9,10];
let ar2=[];
for(let i=ar.length;i>=0;i--)
{
   ar2.push(ar.pop());
}
console.log(ar2);

ar.push(23);
ar.pop();
// ar.toString;
ar.unshift(0);
ar.shift();
console.log(ar.slice(0,9));
