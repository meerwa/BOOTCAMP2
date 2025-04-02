const details = {
    my: 'name',
    is: 'Rudolf',
    the: 'reindeer'
};

// Log the complete sentence
let sentence = "";
for (let key in details) {
    sentence += `${details[key]} `;
}
console.log(sentence.trim()); // logs "name is Rudolf the reindeer"