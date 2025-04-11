function displayStudentInfo(objUser) {
    // Destructuring
    const { first, last } = objUser;
    return `Your full name is ${first} ${last}`;
}

// Test the function
console.log(displayStudentInfo({first: 'Elie', last:'Schoppik'}));


//OUTPUT
//Your full name is Elie Schoppik

