// import readline-sync module, don't touch!
const READLINE = require("readline-sync");

// fill in object below with all relevant properties (see instructions)
let changeMachine = {
	inputCents:undefined,
	quarters:undefined,
	dimes:undefined,
	nickels:undefined,
	pennies:undefined
};
 let farewell = "Have a nice day, goodbye!";


// write code below that simulates the change machine in action!
let inputCents = 179;
let greeting1 = "Welcome! I am your change machine :)!   ";
let greeting2 = "Please enter cents as a positive integer:" 
let y;
y = (`${inputCents}`);
console.log(greeting1);
console.log(greeting2+y);
let z;
z = (`${y} cents makes:`);
console.log(z);
let quarters = Math.floor(inputCents/25);
console.log(`${quarters} quarters`);
let remainder1 = inputCents % 25;
let dimes = Math.floor(remainder1/10);
console.log(`${dimes} dimes`);
let remainder2 = remainder1 %10;
let nickels = Math.floor(remainder2 / 5);
console.log(`${remainder2} nickels`);
let remainder3 = nickels % 5;
let pennies = Math.floor(remainder3 / 1);
console.log(`${remainder3} pennies`);
let remainder4 = pennies % 1;
changeMachine.quarters = quarters;
changeMachine.dimes = dimes; 
changeMachine.nickels = nickels;
changeMachine.pennies = pennies;
console.log(farewell);

