'use strict';

const Linked = require("./lib/linked-list");

let Linked1 = new Linked();

Linked1.append('one');
Linked1.prepend('two');
Linked1.append('three');
Linked1.remove(2);

Linked1.print()

let found = Linked1.find('one');
console.log(found);
