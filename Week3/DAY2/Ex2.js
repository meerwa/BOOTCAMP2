const colors = ["blue", "red", "green", "yellow", "purple"];

// Loop through the array
for (let i = 0; i < colors.length; i++) {
    console.log(`My ${i + 1} choice is ${colors[i]}`);
}

// Bonus: Using suffixes
const suffixes = ["th", "st", "nd", "rd", "th"];
for (let i = 0; i < colors.length; i++) {
    const suffix = (i === 0) ? "st" : (i === 1) ? "nd" : (i === 2) ? "rd" : "th";
    console.log(`My ${i + 1}${suffix} choice is ${colors[i]}`);
}