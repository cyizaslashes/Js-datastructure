// Jokes organized by categories
const jokesByCategory = {
    programming: [
        "Why do programmers prefer dark mode? Because light attracts bugs!",
        "Why did the developer go broke? Because he used up all his cache.",
        "Why was the JavaScript developer sad? Because he didn't know how to 'null' his feelings.",
    ],
    dadJokes: [
        "I'm reading a book on the history of glue. I just can't seem to put it down!",
        "Did you hear about the circus fire? It was in tents!",
        "I used to play piano by ear, but now I use my hands.",
    ],
    puns: [
        "I used to be a baker, but I couldn't make enough dough.",
        "I told my wife she was drawing her eyebrows too high. She looked surprised.",
        "I'm on a seafood diet. I see food and I eat it!",
    ],
};

// Function to generate a random joke based on the specified category
function tellJokeByCategory(category) {
    const jokes = jokesByCategory[category];
    if (jokes) {
        const randomIndex = Math.floor(Math.random() * jokes.length);
        return jokes[randomIndex];
    } else {
        return "Category not found. Please choose a valid category.";
    }
}

// Generating jokes from different categories
const programmingJoke = tellJokeByCategory("programming");
const dadJoke = tellJokeByCategory("dadJokes");
const punJoke = tellJokeByCategory("puns");

// Displaying the jokes
console.log("Programming Joke: ", programmingJoke);
console.log("Dad Joke: ", dadJoke);
console.log("Pun Joke: ", punJoke);
