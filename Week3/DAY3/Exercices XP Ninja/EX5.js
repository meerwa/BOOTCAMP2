function uniqueElements(array) {
    return Array.from(new Set(array)); // Use a Set to filter unique values
}

// Test case
const list = [1, 2, 3, 3, 3, 3, 4, 5];
const newList = uniqueElements(list);
console.log(newList); // [1, 2, 3, 4, 5]