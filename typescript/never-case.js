"use strict";
const greet = (friend) => {
    switch (friend) {
        case "Serval":
            return `Hello, ${friend}`;
        case "Caracal":
            return `Hi, ${friend}`;
        case "Cheetah":
            return `Hiya, ${friend}`;
        default:
            const check = friend;
    }
};
console.log(greet("Serval"));
