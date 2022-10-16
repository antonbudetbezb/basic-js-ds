const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

function removeKFromList(l, k) {
  let prev = l;
  let current = prev.next;

  if (prev.value === k) {
    prev.next = null;
    prev = current;
    current = current.next;
  }
  
  let head = prev;

  while (current.next !== null) {
    if (current.value === k) {
      let next = current.next;
      current.next = 0;
      prev.next = next;
      current = next;
    } else {
      prev = current;
      current = current.next;
    }
  }
  if (current.value === k) {
    prev.next = null;
  }
  
  return head;
}

module.exports = {
  removeKFromList
};
