// Queue implementation in JavaScript

class Queue {
    constructor() {
        this.items = [];
    }

    // Add element to the queue
    enqueue(element) {
        this.items.push(element);
    }

    // Remove element from the queue
    dequeue() {
        if (this.isEmpty()) {
            return "Underflow";
        }
        return this.items.shift();
    }

    // Get the front element of the queue
    front() {
        if (this.isEmpty()) {
            return "No elements in Queue";
        }
        return this.items[0];
    }

    // Check if the queue is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Get the size of the queue
    size() {
        return this.items.length;
    }

    // Print the queue elements
    printQueue() {
        let str = "";
        for (let i = 0; i < this.items.length; i++) {
            str += this.items[i] + " ";
        }
        return str;
    }
}

// Example usage:
const queue = new Queue();
console.log(queue.isEmpty()); // true

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);

console.log(queue.printQueue()); // 10 20 30 40 50

console.log(queue.front()); // 10

console.log(queue.dequeue()); // 10
console.log(queue.printQueue()); // 20 30 40 50

console.log(queue.size()); // 4
