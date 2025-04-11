/*Evaluate to True or False:
[2] === [2] → False
{} === {} → False
Explanation: Different references for every array/object.*/

//2
const object1 = { number: 5 }; 
const object2 = object1; 
const object3 = object2; 
const object4 = { number: 5};

object1.number = 4;
console.log(object2.number); // 4
console.log(object3.number); // 4
console.log(object4.number); // 5


//3
class Animal {
    constructor(name, type, color) {
        this.name = name;
        this.type = type;
        this.color = color;
    }
}

class Mammal extends Animal {
    sound(animalSound) {
        return `Moooo I'm a ${this.type}, named ${this.name} and I'm ${this.color}`;
    }
}

// Creating an instance of Mammal
const farmerCow = new Mammal('Lily', 'cow', 'brown and white');
console.log(farmerCow.sound());


//OUTPUT
//Moooo I'm a cow, named Lily and I'm brown and white