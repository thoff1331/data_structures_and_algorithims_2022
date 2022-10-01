// array implementation 
// js does not have built in stack 

const { start } = require("repl");

let stack = [];
stack.push('google')
stack.push('instagram')
stack.push('fb')

stack.pop()

// if you only use push and pop to add and remove an array behaves as a stack 

stack.unshift('new file'); //  adds to start
stack.unshift('resize file');
console.log(stack);

stack.shift() // removes from start 
stack.shift()


// adding and removing from the start is not efficent because the array needs to be re-indexed 


// building a stack using singly linked lists 
// in a stack push and pop should be constant time 


class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(val) {
    let newNode = new Node(val)
    if(!this.first) {
      this.first = newNode;
      this.last =  newNode;
    } else {
       let temp = this.first;
      this.first = newNode;
      this.first.next = newNode
      
    }
    return ++this.size;
  }
  pop(){
    if(!this.first) return null;
    let temp = this.first;
    if(this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
      return temp.val;
  }

}