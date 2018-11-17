const READLINE = require("readline-sync");

let wantsToDrink = READLINE.question("you're at a party and someone offers you a drink. Do you want it?");
let age = READLINE.question('Please enter your age: ');
if(wantsToDrink == 'Y') {}
if(age>= 21) {
	console.log("Congrats! You can drink alcohol!");
}
else{
	console.log("Sorry! It's illegal to drink alcohol for you.");
}
else{
	console.log("Have some water! You're ao responsible!")
};