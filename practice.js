let a;
function demo(a) {
    this.a = a;
    if (a % 2 == 0) {
        console.log("even number");
    } else {
        console.log("odd number");
    }
}
// demo(10);

function greatest(a, b, c) {

    if (a > b) {
        if (a > c) {
            console.log(a + "is greater");
        }
    } else if (b > c) {

        console.log(b + "is greater");

    }
    else {
        console.log(c + "is greater");
    }
}

// node practice.js
// greatest(12,15,75.5);

// let x=5;
// let y=3;
// let c=x+y;


// console.log(x==5 || y==2);
// console.log(x==5 && y==2);
// console.log(x==5);
// console.log(x!=y);
// console.log(x===y);
// console.log(x!==y);
// console.log(x<=y);
// console.log(x>=y);
// console.log(x**y);


// console.log(--x);
// console.log(x--);
// console.log(x);



function predictor(day) {
    switch (day) {
        case "monday":
            console.log("Today is working day");
            break;
        case "tuesday":
            console.log("Today is working day");
            break;
        case ('wednesday', 'thrusday', 'friday'): console.log("Today is working day");
            break;
        default:
            console.log("Today is Weekend day");
    }

}

// predictor('1');
let x = 10;
let y = 5;
function calculator(input) {
    switch (input) {
        case 1:
            z = x + y;
            console.log(z);
            break;
        case 2:
            z = x - y;
            console.log(z);
            break;
        case 3:
            z = x * y;
            console.log(z);
            break;
        case 4:
            z = x / y;
            console.log(z);
            break;
        case 5:
            z = x % y;
            console.log(z);
            break;
        default:
            console.log("Wrong input");
    }
}
// calculator(3);

