// Define an array of jokes
const jokes = [
    "Why don't scientists trust atoms? Because they make up everything!",
    "Why don't eggs tell jokes? They'd crack each other up!",
    "Why did the tomato turn red? Because it saw the salad dressing!",
  ];
  
  // Define a function to generate a random joke
  function getRandomJoke() {
    // Use a random number generator to select a joke from the array
    const randomIndex = Math.floor(Math.random() * jokes.length);
    return jokes[randomIndex];
  }
  
  // Call the function to get a random joke
  console.log(getRandomJoke());