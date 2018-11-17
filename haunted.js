const READLINE = require("readline-sync");

let player = {
  name: undefined,
  courage: 0,
  intellect: 0,
  strength: 0,
  charm: 0,
  weapon: "taser",
  item: "flashlight"
};

//console.log();
console.log("*** WELCOME TO THE HAUNTED HOUSE ***");
player.name = READLINE.question("What is your name?: ");
console.log(`${player.name} stares at the door, filled with fear`);
console.log(`${player.name}:"My name is ${player.name}..."`);
let enterHouse = READLINE.question(`"Do you dare enter ${player.name} ? (Yes or No)`);
if(enterHouse == "yes" || enterHouse == "Yes") {
  player.courage++;
  player.courage++;
  player.courage++;
  player.intellect--;
  player.strength++;
  player.strength++;

} else {
  player.intellect--;
  player.strength--;
  player.strentgh--;
  player.strength--;
  console.log(`Anzusa stares at the door for a few more seconds and then..`);
  console.log(`*${player.name} turns and runs away from the haunted house*`);
console.log(`BUT...A sudden force stops ${player.name}`);
console.log(`***`);
  console.log(`"Wait...did you really think you can run away. HAHAHA. No."`);
  console.log(`***`);
  console.log(`${player.name} looks around in horror as they raise their ${player.weapon} and try to attack`);
  console.log(`${player.name} realizes it's too late as they're already entering the doors, taser now on the floor`);
  console.log(`***`);
  console.log(`${player.name} gets shoved into the haunted house, tears in their eyes`);
  console.log(`The doors close and black fills every corner of the room...`);
  console.log(`${player.name} was never to be seen again`);
  console.log(`Legend has it that up to this day ${player.name} haunts everyone that goes into the house`);
}
if(enterHouse == "yes" || enterHouse == "Yes")
  let weapon = READLINE.question(`"Okay, choose your choice of weapon": (pocket knife or taser)`)
  if(weapon == "pocket knife" || weapon == "taser")
  	console.log(`${player.name} shoves their ${weapon} into their pockets as the doors open...`);
 	console.log(`The dark swallows ${player.name} as they step foot into their worst nightmare...`);
  	console.log(`${player.name} grabs their ${player.item} and flips the switch on`)
  let door= READLINE.question(`You are presented with 2 door options, one to the left and one to the right.
  	which one will you choose?: (left or right)`)
  if(door == "right") {
  	console.log(`You open the right door and you see someone chainsawing the leg off of someone`);

} else {
	console.log(`There are blood thirsty bats that come flying your way as soon as you open the door.`)
}



 	console.log(`*After 2 hours of being in the haunted house...*`);

if(enterHouse == "yes" || enterHouse == "Yes") {
	let challengeCompleted = READLINE.question(`"Did you succeed? (yes or no)"`);

	challengeCompleted == "Yes"
	console.log("Here is how you scored :D")

	console.log(`Courage points: ${player.courage}
	***
Intellect points: ${player.intellect}
    ***
Strength points: ${player.strength}
    ***
Charm points: ${player.charm}`);
	console.log("Thank you for playing, have a nice day :D");
}







