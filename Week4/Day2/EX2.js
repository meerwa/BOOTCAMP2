const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th", "st", "nd", "rd"];

// Displaying the colors with ordinal indicators
colors.forEach((color, index) => {
    const suffix = (index + 1) <= 3 ? ordinal[index + 1] : ordinal[0]; // handle 1st, 2nd, 3rd appropriately
    console.log(`${index + 1}${suffix} choice is ${color}.`);
});
