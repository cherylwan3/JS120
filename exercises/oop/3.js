class CircularQueue {
  constructor(bufferSize) {
    this.queue = {};
    this.num = 1;
    this.max = bufferSize;
  }

  enqueue(obj) {
    if (Object.keys(this.queue).length === this.max) {
      this.dequeue();
    }

    this.queue[this.num] = obj;
    this.num += 1;
  }

  dequeue() {
    let keys = Object.keys(this.queue).map(key => Number(key));
    if (keys.length <= 0) return null;

    let oldestKey = Math.min(...keys);
    let oldestObj = this.queue[oldestKey];

    delete this.queue[oldestKey];
    return oldestObj;
  }
}


let queue = new CircularQueue(3);
console.log(queue.dequeue() === null);

queue.enqueue(1);
queue.enqueue(2);
console.log(queue.dequeue() === 1);

queue.enqueue(3);
queue.enqueue(4);
console.log(queue.dequeue() === 2);

queue.enqueue(5);
queue.enqueue(6);
queue.enqueue(7);
console.log(queue.dequeue() === 5);
console.log(queue.dequeue() === 6);
console.log(queue.dequeue() === 7);
console.log(queue.dequeue() === null);

let anotherQueue = new CircularQueue(4);
console.log(anotherQueue.dequeue() === null);

anotherQueue.enqueue(1)
anotherQueue.enqueue(2)
console.log(anotherQueue.dequeue() === 1);

anotherQueue.enqueue(3)
anotherQueue.enqueue(4)
console.log(anotherQueue.dequeue() === 2);

anotherQueue.enqueue(5)
anotherQueue.enqueue(6)
anotherQueue.enqueue(7)
console.log(anotherQueue.dequeue() === 4);
console.log(anotherQueue.dequeue() === 5);
console.log(anotherQueue.dequeue() === 6);
console.log(anotherQueue.dequeue() === 7);
console.log(anotherQueue.dequeue() === null);


// simple solution
class CircularQueue1 {
  constructor(size) {
    this.size = size;
    this.queue = [];
  }
  enqueue(obj) {
    if (this.queue.length === this.size) {
      this.dequeue();
    }
    this.queue.push(obj);
  }
  dequeue() {
    return this.queue.shift() || null;
  }
}