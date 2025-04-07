function compareToTen(num) {
    return new Promise((resolve, reject) => {
      if (num <= 10) {
        resolve("The number is less than or equal to 10.");
      } else {
        reject("The number is greater than 10.");
      }
    });
  }
  
  // Testing Exercise 1
  compareToTen(15)
    .then(result => console.log(result))
    .catch(error => console.log(error)); // Expected: "The number is greater than 10."
  
  compareToTen(8)
    .then(result => console.log(result))
    .catch(error => console.log(error)); // Expected: "The number is less than or equal to 10."