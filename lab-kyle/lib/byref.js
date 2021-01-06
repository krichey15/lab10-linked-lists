'use strict';

let a = {value:0};

let b = a;

let c = b;

c = {value: 5};
b.value++;
c.value++;

console.log("a: ", a.value);
console.log("b: ", b.value);
console.log("c: ", c.value);

c = a;
c.value++

console.log("a v2: ", a.value);
console.log("b v2: ", b.value);
console.log("c v2: ", c.value);