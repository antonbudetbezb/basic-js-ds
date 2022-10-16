const { NotImplementedError } = require('../extensions/index.js');

class Stack {
  constructor(value) {
  this.content = [value];
  }

  push(el) {
    this.content.push(el);
  }

  pop() {
    return this.content.pop();
  }

  peek() {
    return this.content[this.content.length - 1];
  }
}

module.exports = {
  Stack
};
