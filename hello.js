function greet(msg)
{
    return function hello()
    {
        console.log(msg);
    };

}
console.log(greet("hello"));
