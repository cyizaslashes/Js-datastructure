// Hashtable implementation in JavaScript

class HashTable {
    constructor(size) {
        this.size = size;
        this.buckets = new Array(size);
    }

    // Hash function to generate an index
    hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % this.size;
    }

    // Insert key-value pair into the hashtable
    insert(key, value) {
        const index = this.hash(key);
        if (!this.buckets[index]) {
            this.buckets[index] = [];
        }
        this.buckets[index].push([key, value]);
    }

    // Get value based on key from the hashtable
    get(key) {
        const index = this.hash(key);
        if (!this.buckets[index]) {
            return null;
        }
        for (let pair of this.buckets[index]) {
            if (pair[0] === key) {
                return pair[1];
            }
        }
        return null;
    }
}

// Example usage:
const myHashTable = new HashTable(10);
myHashTable.insert("apple", 5);
myHashTable.insert("orange", 10);
myHashTable.insert("banana", 15);

console.log(myHashTable.get("apple")); // 5
console.log(myHashTable.get("orange")); // 10
console.log(myHashTable.get("banana")); // 15
console.log(myHashTable.get("grapes")); // null
