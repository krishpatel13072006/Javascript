console.log(Math.PI);

console.log(Math.max(12,42,23,53,46,75,68,97));

console.log(Math.round(1.2))
console.log(Math.round(1.7))
console.log(Math.abs(-1))
console.log(Math.floor(1.4))
console.log(Math.ceil(1.4))
console.log(Math.sqrt(2))
console.log(Math.pow(2,3))
console.log(Math.exp(2,3))

console.log('--------------------------------------------------------------------------------')

let current=new Date();
console.log(current);

let newdate=new Date(2006,7,13,8,15,12);
console.log(newdate.getDay());
console.log(newdate.getFullYear());
console.log(newdate.getMonth());
console.log(newdate.getMinutes());
console.log(newdate.getSeconds());
console.log(newdate.getHours());
console.log(newdate.getTime());
console.log(newdate.getTimezoneOffset());

newdate.setFullYear(2025);
newdate.setHours(3,45,13,12);
console.log(newdate.getFullYear()," ",newdate.getHours());
// node 12_Math.js