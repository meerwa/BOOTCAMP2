// Generate a random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;

// Console.log all even numbers from 0 to the random number
for (let i = 0; i <= randomNumber; i += 2) {
    console.log(i);
}