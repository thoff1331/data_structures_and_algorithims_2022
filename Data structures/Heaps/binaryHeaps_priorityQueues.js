class MaxBinaryHeap {
 constructor() {
   this.values = []
 } 
  insert(val) {
    this.values.push(val);
    this.bubbleUp(val)
  } 
  bubbleUp() {
    let index = this.values.length - 1;
    let element = this.values[index];
    while(index > 0 ) {
     let parentIndex = Math.floor((index - 1) / 2); 
      let parent = this.values[parentIndex]
      if(element <=  parent) break;
        this.values[parentIndex] = element;
        this.values[index] = parent
        index = parentIndex
        
      }
    }
  sinkDown() {
    let index = 0;
    let len = this.values.length;
    let element = this.values[0];
    while(true) {
      let leftIndex = 2 * index + 1;
      let rightIndex = 2 * index + 2;
      let leftChild,rightChild;
      let swap = null;

 if(leftIndex < len) {
   leftChild = this.values[leftIndex];
   if(leftChild > element) {
     swap =  leftIndex
   }
 }
      if(rightIndex < len ) {
        rightChild = this.values[rightIndex]
        if(( swap === null &&  rightChild > element) ||
           (swap !== null && rightChild > leftChild)) {
          swap = rightIndex
        }
      }
      if(swap === null) break;
      this.values[index] = this.values[swap];
      this.values[swap] = element; 
      
    }
  }
  extractMax() {
    
    const max = this.values[0];
    const end = this.values.pop();
    if(this.values.length > 0 ) {
    this.values[0] = end;
    this.sinkDown()
    }
    return max;
  }
  }
}

// add to the end and bubble to get the added node to the correct place 
// the root is where nodes or typically remobed in both maxheap and a  minheap 
// removing down heap, bubbledown,sinkdown basically reheaping the heap so that it is valid 

// PriorityQueue

class PriorityQueue {
    constructor(){
        this.values = [];
    }
    enqueue(val, priority){
        let newNode = new Node(val, priority);
        this.values.push(newNode);
        this.bubbleUp();
    }
    bubbleUp(){
        let idx = this.values.length - 1;
        const element = this.values[idx];
        while(idx > 0){
            let parentIdx = Math.floor((idx - 1)/2);
            let parent = this.values[parentIdx];
            if(element.priority >= parent.priority) break;
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }
    dequeue(){
        const min = this.values[0];
        const end = this.values.pop();
        if(this.values.length > 0){
            this.values[0] = end;
            this.sinkDown();
        }
        return min;
    }
    sinkDown(){
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];
        while(true){
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild,rightChild;
            let swap = null;

            if(leftChildIdx < length){
                leftChild = this.values[leftChildIdx];
                if(leftChild.priority < element.priority) {
                    swap = leftChildIdx;
                }
            }
            if(rightChildIdx < length){
                rightChild = this.values[rightChildIdx];
                if(
                    (swap === null && rightChild.priority < element.priority) || 
                    (swap !== null && rightChild.priority < leftChild.priority)
                ) {
                   swap = rightChildIdx;
                }
            }
            if(swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
    }
}

class Node {
    constructor(val, priority){
        this.val = val;
        this.priority = priority;
    }
}

let ER = new PriorityQueue();
ER.enqueue("common cold",5)
ER.enqueue("gunshot wound", 1)
ER.enqueue("high fever",4)
ER.enqueue("broken arm",2)
ER.enqueue("glass in foot",3)