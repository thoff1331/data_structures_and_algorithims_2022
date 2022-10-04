
class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }
  insert(val) {
   let newNode = new Node(val)
    if(!this.root) {
      this.root = newNode
      return this
    } else {
      let current = this.root;
      while(true) {
        if(val ===  current.val) return undefined;
        if(val < current.val) {
          if(current.left === null) {
            current.left = newNode
            return this;
          } else {
            current = current.left 
          }
        } else if(val > current.val) {
          if(current.right === null) {
            current.right = newNode
            return this 
          } else {
            current = current.right
          }
        }
      }
    }
  }
  find(val) {
    if(this.root === null) return false;
    let current = this.root;
    let found = false;
    while(!found && current) {
      if(val < current.val) {
        current = current.left 
      }else if(val > current.right ) {
        current = current.right
      } else {
        return true
      }
    }
  return false
  }
}
