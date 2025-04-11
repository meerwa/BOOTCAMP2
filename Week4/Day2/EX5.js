const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

// Use reduce to combine all elements into a single string
const epicString = epic.reduce((acc, curr) => acc + ' ' + curr);
console.log(epicString.trim()); // Removing leading whitespace