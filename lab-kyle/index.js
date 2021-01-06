'use strict';

const Linked = require("./lib/linked-list");

let Linked1 = new Linked();

Linked1.append('first');
Linked1.prepend('actual first');
Linked1.append('last');
Linked1.remove(2);

console.log(Linked1);
