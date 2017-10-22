'use strict';

const Element = require('./element.js');
const LinkedList = require('./linkedlist.js');

LinkedList.prototype.reverse = module.exports = function() {

  if(!this.head || !this.next){
    console.log('Nothing to reverse');
    return;
  }

  let positionOne = null;
  let positionTwo = this.head;
  let positionThree;

  while(positionTwo){
    positionThree = positionTwo.next;
    positionTwo.next = positionOne;
    positionOne = positionTwo;
    positionTwo = positionThree;
  }

  this.head = positionOne;
};
