let client = "John";

const groceries = {
    fruits: ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice: "20$",
    other: {
        paid: true,
        meansOfPayment: ["cash", "creditCard"]
    }
};

// Step 1: Create the displayGroceries function
const displayGroceries = () => {
    groceries.fruits.forEach(fruit => {
        console.log(fruit); // Log each fruit from the groceries object
    });
};

// Step 2: Create the cloneGroceries function
const cloneGroceries = () => {
    // Copying the client variable
    let user = client; // Pass by value (primitive type)

    // Change the client variable
    client = "Betty";   
    console.log("User after changing client:", user); // Will still be "John"

    // Copying the groceries variable
    let shopping = groceries; // Pass by reference (object type)

    // Change the total price
    shopping.totalPrice = "35$";
    console.log("Shopping total price:", shopping.totalPrice); // Will be "35$"
    console.log("Groceries total price after modification:", groceries.totalPrice); // Will also be "35$"

    // Change the paid key in the nested object
    shopping.other.paid = false;
    console.log("Shopping paid status:", shopping.other.paid); // Will be false
    console.log("Groceries paid status after modification:", groceries.other.paid); // Will also be false
};

// Invoke the functions
displayGroceries(); // Display the fruits
cloneGroceries();   // Clone groceries and observe changes