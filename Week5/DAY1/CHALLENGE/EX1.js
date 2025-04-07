function makeAllCaps(words) {
    return new Promise((resolve, reject) => {
      if (words.every(word => typeof word === 'string')) {
        const upperCasedArray = words.map(word => word.toUpperCase());
        resolve(upperCasedArray);
      } else {
        reject("Not all elements are strings.");
      }
    });
  }
  
  function sortWords(words) {
    return new Promise((resolve, reject) => {
      if (words.length > 4) {
        const sortedArray = words.sort();
        resolve(sortedArray);
      } else {
        reject("Array length must be greater than 4.");
      }
    });
  }
  
  // Testing the functions
  makeAllCaps([1, "pear", "banana"])
    .then(arr => sortWords(arr))
    .then(result => console.log(result))
    .catch(error => console.log(error)); // Expected: "Not all elements are strings."
  
  makeAllCaps(["apple", "pear", "banana"])
    .then(arr => sortWords(arr))
    .then(result => console.log(result))
    .catch(error => console.log(error)); // Expected: "Array length must be greater than 4."
  
  makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
    .then(arr => sortWords(arr))
    .then(result => console.log(result)) // Expected: ["APPLE","BANANA", "KIWI", "MELON", "PEAR"]
    .catch(error => console.log(error));