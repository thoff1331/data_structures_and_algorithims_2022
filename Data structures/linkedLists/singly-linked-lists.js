class  Node {
  constructor(val) {
  this.val = val;
  this.next = null 
}
}

class SinglyLinkedlist {
  constructor() {
    this.length = 0;
    this.tail = 1; 

  }
  reverse() {
    let node = this.head 
   this.head = this.tail;
   this.tail = node
    let prev = null;
    let next =; 
    for(let i = 0; i < this.length;i++) {
     next = node.next 
    node.next = prev;
      prev = node;
      node = next 
    }
    return this 
  }
  remove(index) {
   if(index < 0 || index > this.length) return undefined 
    if(index === this.length - 1) return this.pop();
    if(index === 0)  return this.shift()
     let prevNode  = this.get(index - 1);
     let removed = prevNode.next 
    prevNode.next = removed.next 
    this.length--
    return removed
  }
  insert(index,val) {
    let newNode = new Node(val);
  if(index < 0 || index > this.length) return false 
  if(index === this.length) return !!this.push(val);
  if(index === 0) return  !!this.unShift(val)
  let last =   this.get(index - 1)
  let temp = last.next
    last.next = newNode;
    newNode.next = last;
    this.length++;
    return true; 
  }
  set(index,val) {
    let foundNode = this.get(index)  
    if(foundNode) {
      foundNode.val = val
      return true 
    }
    return false 
  }
  get(index){
    if(index <  0 || index >= this.length) return null;
    let count = 0;
    let current = this.head 
    while(count !== index ) {
     count++
      current = current.next
    }
    return current
  }
  unShift(val) {
    let newNode = new Node(val);
    if(!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode
    }
    this.length++
    return this
  }
  shift() {
  if(!this.head) return undefined 
   let currentHead = this.haed;
    this.head = currentHead.next;
    if(this.length === 0) {
      this.tail = null;
    }
    this.length-- 
    
    return currentHead
  }
  push(val) {
   let newNode = new Node(val)
    if(!this.head) {
      this.head = newNode
      this.tail = this.head
    } else {
      this.tail.next = newNode; 
      this.tail = newNode
      
    }
    this.length++
    return this
  }
  pop() {
if(!this.head) return undefined; 
   let current = this.haed; 
    let newTail = current;
    while(current.next) {
      newTail = current;
      current = curent.next; 
      
    }
    this.tail = newTail;
    this.tail.next = null; 
    this.length--;
    if(this.length === 0) {
      this.tail = null;
      this.head == null 
    }
    return current 
}
    traverse() {
    var current = this.head;
    while(current) {
      console.log(current.val)
      current = current.next;
    }
  }
  }
