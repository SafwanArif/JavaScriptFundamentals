let favouriteDrinks = ["Coke", "Fanta", "Tonic", "Redbull"]

// console.log(favouriteDrinks[0])
// console.log(favouriteDrinks[1])
// console.log(favouriteDrinks[2])


for(let i = 0; i < favouriteDrinks.length; i++){
    console.log(favouriteDrinks[i])
}

// for (initialExpressions; condition; increment/decrementExpression);
// do stuff

let multiplesTwo = []

for(let i = 0; i <= 20; i++){
    if (i % 2 == 0){
        multiplesTwo.push(i)
    }
}

console.log(`Numbers divisible by 2 between 0 and 20 are: ${multiplesTwo}.`)


let age = 15;

while (age < 18){
    console.log("You're too young!")
    age++;
}
console.log("You're an adult")

let cards = ["Diamond", "Spade", "Heart", "Club"]
let currentCard = "Club"

while(currentCard != "Spade"){
    console.log(currentCard)
    currentCard = cards[Math.floor(Math.random()*4)]
}

console.log(currentCard)