
for (let i = 1; i <= 6; i++) { // Loop for each row
    let row = ""; // Initialize a string to hold the row's pattern
    for (let j = 1; j <= i; j++) { // Loop to create the number of asterisks
        row += "* "; // Add an asterisk followed by a space
    }
    console.log(row); // Print the current row
}