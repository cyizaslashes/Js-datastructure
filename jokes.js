// Array of jokes
const jokes = [
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "Did you hear about the mathematician who's afraid of negative numbers? He'll stop at nothing to avoid them!",
    "Parallel lines have so much in common. It’s a shame they’ll never meet.",
    "I told my wife she was drawing her eyebrows too high. She looked surprised.",
    "Why don't some fish play piano? You can't tuna fish!",
    "I'm reading a book on anti-gravity. It's impossible to put down!",
    "What did one wall say to the other wall? I'll meet you at the corner!",
    "I used to play piano by ear, but now I use my hands.",
    "I'm on a seafood diet. I see food and I eat it!",
    "I'm reading a book about anti-gravity. It's impossible to put down!",
];

// Function to generate a random joke
function tellJoke() {
    const randomIndex = Math.floor(Math.random() * jokes.length);
    return jokes[randomIndex];
}

// Calling the function to tell a random joke
const joke = tellJoke();
console.log(joke);
