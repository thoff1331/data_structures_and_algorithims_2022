// array Implementation 

const q = [];

q.push()
q.push()
q.push()

q.shift()



q.unshift('t')
q.unshift('z')
q.unshift('z')

q.shift()




// creating a queue class 


class Queue {
constructor() {
  this.first = null;
  this.last = null;
  this.size = 0
} 
}

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
  enqueue(val) {
   let newNode = new Node(val);
    if(!this.first) {
      this.first = newNode;
      this.last = newNode;

    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size
  } 
  dequeue() {
   if(!this.first ) return null
   let temp = this.first; 
    if(this.first === this.last) {
      this.last = null
    }
    this.first = this.first.next
    this.size--
    return temp.val
}
  
}