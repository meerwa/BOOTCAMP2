function isBlank(str) {
    return str.length === 0; // Check if the string's length is zero
}

// Test cases
console.log(isBlank(''));     // true
console.log(isBlank('abc'));  // false