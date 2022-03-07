const vacationSpots = ['Bali', 'Paris', 'Tulum'];


for (let i = 0; i < vacationSpots.length; i++ ){
  document.write('I would love to visit ' + vacationSpots[i]);
}

let bobsFollowers = ['Joe', 'Marta', 'Sam', 'Erin'];
let tinasFollowers = ['Sam', 'Marta', 'Elle'];
let mutualFollowers = [];
for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(bobsFollowers[i]);
    }
  }
}

const cards = ['diamond', 'spade', 'heart', 'club'];
let currentCard;
while ( currentCard != 'spade') {
  currentCard = cards[Math.floor(Math.random() * 4)];
	document.write(currentCard);
}


let cupsOfSugarNeeded = 3;
let cupsAdded = 0;

do {
 cupsAdded++
 document.write(cupsAdded + ' cup was added') 
} while (cupsAdded < cupsOfSugarNeeded);

const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];


for (let i = 0; i < rapperArray.length; i++){
  document.write(rapperArray[i]);
  if (rapperArray[i] === 'Notorious B.I.G.'){
    break;
  }
}

document.write("And if you don't know, now you know.");

let groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

