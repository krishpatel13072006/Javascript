let color="yellow";
 color += "color";
 console.log(color);

 let x=10;
 ++x;
 console.log(x);

 
 function demo(a)
 {
    this.a=a;
    if(a%2==0)
    {
 console.log("even number");
        
    }
    else{
 console.log("odd number");

    }
 }


 for(i=1;i<=10;i++)
 {
    console.log("2 *"+ i+"="+2*i);
 }

 for( i=1;i<=10;i++)
 {
 var factor=0;
   
    for( j=1;j<=i;j++)
    {
      if(i%j==0){
         factor++;
      }
    }

    if(factor==2){
      console.log(i+"number is prime number");
    }else{
      console.log(i+"number is not prime");
    }
 }

// for (let i = 1; i <= 10; i++) {
//    let factor = 0;
   
//    for (let j = 1; j <= i; j++) {
//      if (i % j === 0) {
//        factor++;
//      }
//    }
   
//    if (factor === 2) {
//      console.log(i + " is prime");
//    } else {
//      console.log(i + " is not prime");
//    }
//  }
 
//  demo(2);
function greet(msg)
{
    return ()=>
    {
        console.log(msg);
    };

}
let t1 = greet("helo");
console.log(t1);
