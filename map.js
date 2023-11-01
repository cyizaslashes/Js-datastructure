// Map usage in JavaScript

// Creating a new Map
let myMap = new Map();

// Adding key-value pairs to the map
myMap.set("key1", "value1");
myMap.set("key2", "value2");
myMap.set("key3", "value3");

// Getting values from the map
console.log(myMap.get("key1")); // value1
console.log(myMap.get("key2")); // value2

// Checking if the map has a specific key
console.log(myMap.has("key3")); // true

// Getting the size of the map
console.log(myMap.size); // 3

// Iterating through the map
for (let [key, value] of myMap) {
    console.log(key, value);
}

// Deleting an entry from the map
myMap.delete("key2");

// Clearing all entries from the map
myMap.clear();

// Checking if the map is empty
console.log(myMap.size); // 0
