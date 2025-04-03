function capitalize(str) {
    let evenCapitalized = '';
    let oddCapitalized = '';

    for (let i = 0; i < str.length; i++) {
        if (i % 2 === 0) {
            evenCapitalized += str[i].toUpperCase(); // Capitalize even index
            oddCapitalized += str[i]; // Keep odd index lowercase
        } else {
            evenCapitalized += str[i]; // Keep even index lowercase
            oddCapitalized += str[i].toUpperCase(); // Capitalize odd index
        }
    }

    return [evenCapitalized, oddCapitalized];
}

// Test case
console.log(capitalize("abcdef")); // ['AbCdEf', 'aBcDeF']