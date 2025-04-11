const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

// Displaying the colors with their index
colors.forEach((color, index) => {
    console.log(`${index + 1}# choice is ${color}.`);
});

// Check if "Violet" exists in the array
const hasViolet = colors.includes("Violet");
console.log(hasViolet ? "Yeah" : "No...");