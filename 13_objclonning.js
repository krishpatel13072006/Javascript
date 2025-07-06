let ob={

    name:"krish",
    age:19,
    birth:"13 07 2006",
    weight:60
}

//object clonning using spread operator  {...obj_name}
let ob2={...ob};
ob2.gender="male";

console.log(ob);
// console.log(ob2);

//object clonning using assign method

let ob3=Object.assign({},ob);
ob3.age=null;
// console.log(ob3)

console.log()

let x1={
    fruit:"mango",
    color:"yellow"
}
let ob4=Object.assign({},ob,x1);
// console.log(ob4)

console.log()

//object clonning using loop
let obj={};

for(let key in ob)
{
let newkey=key;
let value=ob[key];
obj[newkey]=value;
}
obj.name=null;
console.log(obj);
// node 13_objclonning.js