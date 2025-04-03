function biggestNumberInArray(arrayNumber) {
    // Filter the array to keep only numbers and return the maximum or 0 for empty array
    const numbers = arrayNumber.filter(item => typeof item === 'number');
    return numbers.length ? Math.max(...numbers) : 0; // Return biggest number or 0
}

// Test cases
console.log(biggestNumberInArray([-1, 0, 3, 100, 99, 2, 99])); // 100
console.log(biggestNumberInArray(['a', 3, 4, 2]));            // 4
console.log(biggestNumberInArray([]));                         // 0