'use strict';

const Element = require('./element.js');

const LinkedList = module.exports = function (element) {
  this.numOf = 0;
  this.head = element || null;
};
