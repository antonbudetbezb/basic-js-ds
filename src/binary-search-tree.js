const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    this.rootNode = addElement(this.rootNode, data);

    function addElement (node, data) {
      if (!node) {
        return new Node(data);
      }

      if (node.data === data) {
        return node;
      }

      if (data < node.data) {
        node.left = addElement(node.left, data);
      } else {
        node.right = addElement(node.right, data);
      }

      return node
    }
  }

  has(data) {
    return searchInside(this.rootNode, data);

    function searchInside(node, data) {
      if (!node) {
        return false;
      }

      if (node.data === data) {
        return true
      }

      if (data > node.data) {
        return searchInside(node.right, data);
      } else {
        return searchInside(node.left, data);
      }
    }
  }

  find(data) {
    return findElement(this.rootNode, data);

    function findElement(node, data) {
      if (!node) {
        return null;
      }

      if (node.data === data) {
        return node;
      }

      if (data > node.data) {
        return findElement(node.right, data);
      } else {
        return findElement(node.left, data);
      }
    } 
  }

  remove(data) {
    this.rootNode = deleteElement(this.rootNode, data);

    function deleteElement(node, data) {
      if (!node) {
        return null;
      }

      if (data > node.data) {
        node.right = deleteElement(node.right, data);
        return node;
      }
      else if (data < node.data) {
        node.left = deleteElement(node.left, data);
        return node;
      }
      else {
        if (!node.left && !node.right) {
          return null;
        }

        if (!node.left) {
          node = node.right;
          return node;
        }

        if (!node.right) {
          node = node.left;
          return node;
        }

        let maxfromLeft = node.left;
        while (maxfromLeft.right) {
          maxfromLeft = maxfromLeft.right;
        }
        node.data = maxfromLeft.data;
        node.left = deleteElement(node.left, maxfromLeft.data);
        return node;
      }
    }
  }

  min() {
    let node = this.rootNode;
    while(node.left) {
      node = node.left
    }
    return node.data
  }

  max() {
    let node = this.rootNode;
    while(node.right) {
      node = node.right
    }
    return node.data
  }
}

module.exports = {
  BinarySearchTree
};
let tree = new BinarySearchTree();
tree.add(2);
console.log(tree)