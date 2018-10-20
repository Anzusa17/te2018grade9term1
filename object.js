let enemy = {
	firstName: "Evil",
	isEnemy: true,
	lastName: "Chicken Nugget",
	catchphrase: "'actuallyyy, that wasn't me...'",
	crime: "rob chicken nuggets from mcdonalds every week",
};
let identity = {
	firstName: "Special",
	lastName: "Potatoe",
	catchphrase: "'hmph, up to no good again'",
	archenemy: "Evil Chicken Nugget"
};
identity.nickname = "fries"


console.log(`Im ${enemy.firstName} ${enemy.lastName},
	and I say ${enemy.catchphrase}. I ${enemy.crime}`);
console.log(`Im ${identity.firstName} ${identity.lastName}, 
	and I say ${identity.catchphrase}. My nickname is ${identity.nickname}`);
