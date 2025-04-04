function areAnagrams(str1, str2) {
    // Remove whitespace and convert to lowercase
    const normalizeString = (str) => str.replace(/\s+/g, '').toLowerCase();

    // Normalize both strings
    str1 = normalizeString(str1);
    str2 = normalizeString(str2);

    // Check lengths first
    if (str1.length !== str2.length) {
        return false; // If lengths differ, they can't be anagrams
    }

    // Create a frequency object for the first string
    const charCount = {};

    for (const char of str1) {
        charCount[char] = (charCount[char] || 0) + 1; // Increment character count
    }

    // Verify against the second string
    for (const char of str2) {
        if (!charCount[char]) {
            return false; // Character not found or count is zero
        }
        charCount[char]--;
    }

    return true; // All characters matched, thus they're anagrams
}

// Example usage
console.log(areAnagrams("Astronomer", "Moon starer")); // true
console.log(areAnagrams("School master", "The classroom")); // true
console.log(areAnagrams("The Morse Code", "Here come dots")); // true
console.log(areAnagrams("Hello", "World")); // false