'use strict';

const Element = require('./lib/element.js');
const LinkedList = require('./lib/linkedlist.js');
const append = require('./lib/append.js');
const prepend = require('./lib/prepend.js');
const remove = require('./lib/remove.js');
const reverse = require('./lib/reverse.js');

let sampleOne = new Element(1);
console.log('Sample One: ', sampleOne);

let sampleTwo = new Element(2);
console.log('Sample Two: ', sampleTwo);

let sampleList = new LinkedList(sampleOne);
sampleList.append(sampleTwo);
console.log('Sample List: ', sampleList);

sampleList.reverse();
console.log('Reversed List: ', sampleList);
