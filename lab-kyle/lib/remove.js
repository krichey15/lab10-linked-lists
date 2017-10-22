'use strict';

const Element = require('./element.js');
const LinkedList = require('./linkedlist.js');

LinkedList.prototype.remove = module.exports = function(value) {
  if(!this.head){
    console.log('Nothing to remove');
    return;
  }

  if(this.head.value === value){
    this.head = this.head.next;
  } else {
    let positionOne = this.head;
    let postitionTwo = positionOne.next;

    while (postitionTwo){
      if(postitionTwo.value === value){
        positionOne.next = postitionTwo.next;
        break;
      } else {
        positionOne = postitionTwo;
      }
      postitionTwo = postitionTwo.next;
    }
  }

  this.numOf--;

};
