// Stack implementation in JavaScript

class Stack {
    constructor() {
        this.items = [];
    }

    // Add element to the stack
    push(element) {
        this.items.push(element);
    }

    // Remove element from the stack
    pop() {
        if (this.isEmpty()) {
            return "Underflow";
        }
        return this.items.pop();
    }

    // Get the top element of the stack
    peek() {
        return this.items[this.items.length - 1];
    }

    // Check if the stack is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Get the size of the stack
    size() {
        return this.items.length;
    }

    // Print the stack elements
    printStack() {
        let str = "";
        for (let i = 0; i < this.items.length; i++) {
            str += this.items[i] + " ";
        }
        return str;
    }
}

// Example usage:
const stack = new Stack();
console.log(stack.isEmpty()); // true

stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);
stack.push(50);

console.log(stack.printStack()); // 10 20 30 40 50

console.log(stack.peek()); // 50

console.log(stack.pop()); // 50
console.log(stack.printStack()); // 10 20 30 40

console.log(stack.size()); // 4
