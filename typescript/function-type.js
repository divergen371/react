"use strict";
{
    function add(n, m) {
        return n + m;
    }
    console.log(add(2, 4));
}
{
    const add = function add(n, m) {
        return n + m;
    };
    console.log(add(4, 6));
}
{
    const add = (n, m) => n + m;
    const hello = () => {
        console.log("Hello");
    };
    console.log(add(8, 9));
    hello();
}
