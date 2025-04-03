function isPalindrome(str) {
    const reversed = str.split('').reverse().join(''); // Reverse the string
    return str === reversed; // Check if original is equal to reversed
}

// Test cases
console.log(isPalindrome("madam")); // true
console.log(isPalindrome("bob"));   // true
console.log(isPalindrome("kayak")); // true
console.log(isPalindrome("hello")); // false