// #1 Function to demonstrate variable scope with let
function funcOne() {
    let a = 5; // Declare variable a with let
    if(a > 1) {
        a = 3; // Reassign variable a if the condition is true
    }
    alert(`inside the funcOne function ${a}`); // Alert the value of a
}

// #1.1 - Run in the console: Calling funcOne() will alert "inside the funcOne function 3"
// #1.2 - If 'a' is declared with const instead of let, it will throw an error because const cannot be reassigned.

// #2 Global variable a initialized to 0
let a = 0;
// Function to modify the global variable a
function funcTwo() {
    a = 5; // Sets global variable a to 5
}

// Function to alert the current value of a
function funcThree() {
    alert(`inside the funcThree function ${a}`); // Alert the value of a
}

// #2.1 - Run in the console: 
// Calling funcThree() first will alert "inside the funcThree function 0"
// After calling funcTwo(), calling funcThree() again will alert "inside the funcThree function 5"
// #2.2 - If 'a' is declared with const instead of let, it will result in a TypeError when trying to modify its value in funcTwo().

// #3 Function to set a property on the global window object
function funcFour() {
    window.a = "hello"; // Sets window.a to "hello"
}

// Function to alert the current value of a
function funcFive() {
    alert(`inside the funcFive function ${a}`); // Alerts the value of a
}

// #3.1 - Run in the console: 
// After running funcFour(), calling funcFive() will alert "inside the funcFive function hello"

// #4 Function to demonstrate local variable scope
let a = 1; // Global variable a
function funcSix() {
    let a = "test"; // Local variable a
    alert(`inside the funcSix function ${a}`); // Alerts the value of the local variable a
}

// #4.1 - Run in the console: 
// Calling funcSix() will alert "inside the funcSix function test"
// #4.2 - If 'a' is declared with const instead of let, it will still display "test" as const also has block scope. 

// #5 Demonstrate block scoping with let
let a = 2; // Global variable a
if (true) {
    let a = 5; // Block-scoped variable a
    alert(`in the if block ${a}`); // Alerts the value of the block-scoped variable a
}
alert(`outside of the if block ${a}`); // Alerts the value of the global variable a

// #5.1 - Run in the console: 
// Inside the if block, it alerts "in the if block 5"
// Outside the if block, it alerts "outside of the if block 2"
// #5.2 - If 'a' in the block is declared with const instead of let, it will work the same way because const also has block scope.