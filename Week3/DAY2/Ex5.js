const family = {
    dad: "John",
    mom: "Jane",
    sibling: "Doe",
};

// Log keys of the object
for (let key in family) {
    console.log(key);
}

// Log values of the object
for (let key in family) {
    console.log(family[key]);
}