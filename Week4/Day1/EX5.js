function KgToGrammes(kg){
    return kg* 1000;
}
// Invoking the function
console.log(kgToGrams(5)); // 5000

// Function expression to convert kg to grams
const kgToGramsExpr = function(kg) {
    return kg * 1000;
};

// Invoking the function expression
console.log(kgToGramsExpr(3)); // 3000

// Difference: 
// Function declaration is hoisted, whereas function expression is not hoisted.


// One-line arrow function to convert kg to grams
const kgToGramsArrow = (kg) => kg * 1000;

// Invoking the arrow function
console.log(kgToGramsArrow(7)); // 7000