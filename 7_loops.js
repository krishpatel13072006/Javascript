//node 7_loops.js
function table(num)
{
    let i=1;
{
    console.log(num+"*"+i+" : "+num*i);
    i++;
} while(i<=10);
}
// table(5);

//print 10 to 1 using for,while and do-while loop

// for(let i=10;i>=1;i--)
// {
//     console.log(i);
// }

// let I=10;
// while(I>=1)
// {
//     console.log(I);
//     I--;
// }

// let x=10
// do{
//     console.log(x);
//     x--;
// }while(x>=1);


let i=5;
let j=5;
for(i=1;i<=5;i++)
{
    for(j=1;j<=i;j++)
    {
        document.write('*');
    }
      document.write('<br>');

}