// Text-based adventure game

// Initial game setup
let currentRoom = "start";
const rooms = {
    start: {
        description: "You are in a dark room. There is a door to the north.",
        items: [],
        north: "room1",
    },
    room1: {
        description: "You are in a room with a glowing orb. There are doors to the west and south.",
        items: ["orb"],
        west: "start",
        south: "room2",
    },
    room2: {
        description: "You are in a room with a giant spider. There is a door to the north.",
        items: ["spider"],
        north: "room1",
    },
};

// Function to handle user input
function handleInput(input) {
    const directions = ["north", "south", "east", "west"];
    if (directions.includes(input) && rooms[currentRoom][input]) {
        currentRoom = rooms[currentRoom][input];
        console.log(rooms[currentRoom].description);
    } else if (input === "look") {
        console.log(rooms[currentRoom].description);
    } else if (input === "inventory") {
        console.log("You are carrying: " + rooms[currentRoom].items.join(", "));
    } else if (input === "quit") {
        console.log("Game over. Thanks for playing!");
    } else {
        console.log("Invalid command. Please try again.");
    }
}

// Initial game start
console.log("Welcome to the Adventure Game! Type 'quit' to exit.");
console.log(rooms[currentRoom].description);

// Simulating user input
handleInput("north");
handleInput("look");
handleInput("inventory");
handleInput("east");
handleInput("quit");
