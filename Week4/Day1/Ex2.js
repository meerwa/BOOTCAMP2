// Define the winBattle function as an arrow function
const winBattle = () => true; // Change to false to see the experiencePoints variable equal to 1

// Create the experiencePoints variable using a ternary operator
const experiencePoints = winBattle() ? 10 : 1;

// Console log the experiencePoints variable
console.log(experiencePoints); // Outputs 10 if winBattle() returns true, otherwise 1