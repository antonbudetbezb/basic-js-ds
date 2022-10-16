const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

class Queue {
  constructor() {
    this.head = null;
  }

  getUnderlyingList() {
    return this.head
  }

  enqueue(value) {
    if (this.head == null) {
      return this.head = new ListNode (value);
    } 
    else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = new ListNode (value);
      return this.head;
    }
  }

  dequeue() {
    let current = this.head;
    let next = current.next;
    current.next = null;
    this.head = next;

    return current.value;
  }
}

module.exports = {
  Queue
};
