function abbrevName(name) {
    const parts = name.split(" "); // Split the name into parts
    return `${parts[0]} ${parts[1].charAt(0).toUpperCase()}.`; // Return abbreviated form
}

// Test case
console.log(abbrevName("Robin Singh")); // "Robin S."