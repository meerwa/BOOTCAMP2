const morse = `{
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-"
  }`;
  
  function toJs() {
    return new Promise((resolve, reject) => {
      const morseObject = JSON.parse(morse);
      if (Object.keys(morseObject).length > 0) {
        resolve(morseObject);
      } else {
        reject("Morse object is empty.");
      }
    });
  }
  
  function toMorse(morseJS) {
    return new Promise((resolve, reject) => {
      const userInput = prompt("Enter a word or sentence:").toLowerCase();
      const morseTranslation = [];
  
      for (let char of userInput) {
        if (morseJS[char]) {
          morseTranslation.push(morseJS[char]);
        } else {
          reject(`Character "${char}" does not exist in Morse code.`);
          return;
        }
      }
      resolve(morseTranslation);
    });
  }
  
  function joinWords(morseTranslation) {
    const morseString = morseTranslation.join('\n');
    // Display the morseString in the DOM or console
    console.log(morseString);
  }
  
  // Chaining the functions
  toJs()
    .then(morseJS => toMorse(morseJS))
    .then(morseTranslation => joinWords(morseTranslation))
    .catch(error => console.log(error));