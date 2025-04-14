// app.mjs

// Import the array using ES6 syntax
import { people } from './data.mjs';

// Function to calculate average age
function calculateAverageAge(persons) {
  const totalAge = persons.reduce((sum, person) => sum + person.age, 0);
  const average = totalAge / persons.length;
  console.log(`Average age is: ${average}`);
}

// Use the function
calculateAverageAge(people);
