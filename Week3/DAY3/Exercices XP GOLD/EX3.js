function swapCase(str) {
    let swapped = '';
    for (let char of str) {
        if (char === char.toUpperCase()) {
            swapped += char.toLowerCase(); // Convert uppercase to lowercase
        } else {
            swapped += char.toUpperCase(); // Convert lowercase to uppercase
        }
    }
    return swapped;
}

// Test case
console.log(swapCase('The Quick Brown Fox')); // "tHE qUICK bROWN fOX"