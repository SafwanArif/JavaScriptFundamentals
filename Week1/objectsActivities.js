// // Activity 1: Let's edit out person object to include...
// //
// // const person = {
// //     name: "Safwan",
// //     age: 34
// // }
// //
// // A function called sayHi and when it's called it should return "Hello, my name is ${this.name}"

// const person = {
//     name: "Safwan",
//     age: 27,
// sayHi() {
//     return `Hello, my name is ${this.name}`
//     }
// }

// console.log(person.sayHi())

// -------------------------------------------------------------------------------------------------------

// // Activity 2: Create an OBJECT called pet with the key values of: name, typeOfPet, age, colour
// // and METHODS called eat and drink. They should return a string saying [Your Pet Name] is eating/drinking.

// const pet = {
//     name: "Milo",
//     typeOfPet: "Cat",
//     age: 2,
//     colour: "White",

// Eat() {
//     return `Your pet ${this.name} is eating.`
// },

// Drink() {
//     return `Your pet ${this.name} is drinking.`
// }
// }

// console.log(pet.Eat())
// console.log(pet.Drink())

// -------------------------------------------------------------------------------------------------------

// Activity 3: Create an object called coffeeShop with key values of: 
// branch, drinks with prices, food with prices
// And methods called drinksOrdered and foodOrdered.
// They should return a string saying [Your order] is … with all
// items chosen with costs and total costs. 

const coffeeShop = {
    Branch: "Rochdale",
    DrinksWithPrices: {
        Tea:1.00,
        HotChocolate:1.50,
        Latte:1.20,
        HerbalTea:2.00,
        Water:0.80,
    },
    FoodWithPrices: {
        Croissant:1.00,
        Sandwich:1.50,
        Pasta:3.00,
        FullEnglish:6.00,
        Cake:4.00,
    },
    drinksOrdered(drink1, drink2){
        let drinks = Object.keys(this.DrinksWithPrices)
        let drinkValues = Object.values(this.DrinksWithPrices)
        
    }
}





// let order = [];
// const coffeeShop = {
//     branch:"manchester",
//     drinksWithPrices:{"tea":1.00,"americano":2.00,"mocha":3.00,"latte":3.00,water:0},
//     foodWithPrices:{"salad":2.00,"sandwich":3.00,"tunaJacket":4.50,"grape":15.00},
//     drinksOrdered(drink1,drink2){
//         let drinks = Object.keys(this.drinksWithPrices); 
//         let drinkValues = Object.values(this.drinksWithPrices); 
//         order.push(drinkValues[drinks.indexOf(drink1)]);
//         order.push(drinkValues[drinks.indexOf(drink2)]);
//         return `For drinks you've ordered ${drink1} and ${drink2}`;},
//     foodOrdered(food1,food2){
//         let foods = Object.keys(this.foodWithPrices); 
//         let foodValues = Object.values(this.foodWithPrices); 
//         order.push(foodValues[foods.indexOf(food1)]);
//         order.push(foodValues[foods.indexOf(food2)]);
//         return `For food you've ordered ${food1} and ${food2}`;
//     }
// }
// console.log(coffeeShop.drinksOrdered("tea","mocha"));
// console.log(coffeeShop.foodOrdered("salad","grape"));
// let total = 0;
// for(i=0;i<order.length;i++){
//     total+=order[i];
// }

// console.log(`Your total comes to £${total}.`);