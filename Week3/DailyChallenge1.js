// Create the sentence variable
let sentence = "This dinner is not that bad !";

// Find the position of "not" and "bad"
let wordNot = sentence.indexOf("not");
let wordBad = sentence.indexOf("bad");

// Check if "bad" comes after "not"
if (wordNot !== -1 && wordBad !== -1 && wordBad > wordNot) {
    // Replace the "not...bad" substring with "good"
    sentence = sentence.slice(0, wordNot) + "good" + sentence.slice(wordBad + 3);
}

// Console.log the result
console.log(sentence);