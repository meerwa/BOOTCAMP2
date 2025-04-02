const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

// Get the first letter of each name
const initials = names.map(name => name.charAt(0));

// Sort the initials in alphabetical order
initials.sort();

// Join the sorted initials into a single string
const secretSociety = initials.join('');

console.log(secretSociety); // Output: "ABJKPS"