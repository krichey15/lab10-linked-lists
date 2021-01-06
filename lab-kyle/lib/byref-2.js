'use strict';

// Example to show that no matter what objects will always be pass by refrence. 

let a = {subObj: {value: 0}};

let b = a.subObj;

b.value++;

console.log("a: ", a);
console.log("b: ", b);