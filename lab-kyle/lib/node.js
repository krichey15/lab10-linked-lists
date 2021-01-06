'use strict';

let Node = module.exports = exports = function(value, next){
    this.value = value;
    this.next = next || null;
}