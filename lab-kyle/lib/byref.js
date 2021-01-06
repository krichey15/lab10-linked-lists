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

// Below is no longer pass by refrence but pass by value instead. Pass by refrence only pertains to objects.
let d = c.value;
d++;

console.log("a v3: ", a.value);
console.log("b v3: ", b.value);
console.log("c v3: ", c.value);
console.log("d: ", d);
