const people = ["Greg", "Mary", "Devon", "James"];

// Remove "Greg" from the people array
const indexGreg = people.indexOf("Greg");
if (indexGreg !== -1) {
    people.splice(indexGreg, 1);
}

// Replace "James" with "Jason"
const indexJames = people.indexOf("James");
if (indexJames !== -1) {
    people[indexJames] = "Jason";
}

// Add your name to the end of the people array
people.push("Yourname");

// Console.log Mary's index
console.log(people.indexOf("Mary"));

// Make a copy of the people array excluding "Mary" and your name
const peopleCopy = people.slice(1, 3); // ["Devon", "Jason"]

// Give the index of "Foo"
console.log(people.indexOf("Foo")); // returns -1 because "Foo" is not in the array

// Get the last element of the array
const last = people[people.length - 1];
console.log(last); // logs "Yourname"














//PART II LOOP
// Iterate through the people array
for (let person of people) {
    console.log(person);
}

// Iterate through the people array and exit after "Devon"
for (let person of people) {
    console.log(person);
    if (person === "Devon") {
        break;
    }
}