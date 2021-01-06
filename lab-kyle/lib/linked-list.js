'use strict';
const Node = require(__dirname + '/node');

const LinkedList = module.exports = function(node){
    this.head = node || null;
};

// Add Node to the front of the list.
LinkedList.prototype.prepend = function(value){
    let oldHead = this.head;

    this.head = new Node(value, oldHead);
};

// Add Node to the end of the list. 
LinkedList.prototype.append = function(value){
    if(this.head === null){
        return this.head = new Node(value);
    }

    let current = this.head;

    while(current.next !== null){
        current = current.next;
    }
    current.next = new Node(value);
};

