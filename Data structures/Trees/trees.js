
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
  BFS() {
    let data = [];
    let q = [];
    let node = this.root;
    q.push(node);
    while(q.length) {
      node =  q.shift();
      data.push(node);
      if(node.left) {
        q.push(node.left)
      } if(node.right) {
        q.push(node.right)
      }
      return data
    }
  }
  DFSPreOder() {
    let data = [];
    let current = this.root;
    function traverse(node) {
      data.push(node)
     if(node.left) travese(node.left);
     if(node.right) travese(node.right);
    }
    travsere(this.root);
    return data
  }
  DFSPostOrder(){
    let data = [];
    let current = this.root;
    function traverse(node) {
     if(node.left) travese(node.left);
     if(node.right) travese(node.right);
      data.push(node);
    }
    travsere(this.root);
    return data
  }
  DFSInOrder() {
     let data = [];
    let current = this.root;
    function traverse(node) {
     if(node.left) travese(node.left);
      data.push(node);
     if(node.right) travese(node.right);
    }
    travsere(this.root);
    return data
  }
}

// Tree Traversal BFS method above 
// Tree Traversal DFS
// traversal method is helper 

