class student {

    #fname; //variables created with # are declared as private variables
    #lname;
    class_name;
    weight;


    constructor(class_name='A',weight=60) {
        // this.#fname = fname;
        // this.#lname = lname;
        this.class_name=class_name;
        this.weight=weight;
    }

    set first_name(fname){
        this.#fname=fname;
    }

    set last_name(lname)
    {
        this.#lname=lname;
    }

    get f_nme()
    {
        return this.#fname;
    }

    get l_nme(){
        return this.#lname;
    }

    play(msg)
    {
        return msg;
    }

    work(){
      console.log(this.play("students likes to play")+" "+"and works on their studies");
    }
    
    display()
    {
        console.log(

            "first Name : "+this.#fname+'\n'+
            "last Name : "+this.#lname+'\n'+
            "Class_name : "+this.class_name+'\n'+
            "Weight : "+this.weight+'\n'+
            this.play("students likes to play")

        )
    }

}

let obj=new student();
// obj.display();

//getters and setters are used as properities instead of functions
obj.first_name="krish"; 
// console.log(obj.f_nme);

obj.last_name="patel";
// let x=obj.l_nme;
// console.log(x);

// let msg=obj.play("students likes to play");
// console.log(msg);

// obj.work();

// obj.display();

console.log("--------------------------------------------------------------------------------------------")
// node 11_class.js

function abc(f_nme="krish",l_nme=f_nme.toUpperCase(),msg={class_name:'A',weight:60},arr=[1,2,3,4,5,6,7,8,9,10])
{
   return(f_nme,l_nme,msg,arr);
}

let x=abc();
console.log(x);