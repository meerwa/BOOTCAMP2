function isOmnipresent(array, value) {
    return array.every(subArray => subArray.includes(value)); // Check if value exists in every subarray
}

