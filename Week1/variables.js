// console.log("All Around the World".charAt(7).toUpperCase())

// let i = 10

// i= i + 2
// //i should now equal 12
// console.log(i)

// // better way to do it:
// i += 2
// console.log(i)
// // i should now equal 14
// let favoutireDrink = "Coffee"

// console.log("My favourite drink is " + favoutireDrink)

// let name = "Safwan"
// let age = 27
// let favDrink = "Water"

// console.log("Hello, my name is " +name + " and I am " + age +" years old. My favourite drink is " +favDrink +".")
// // using "Template Literals" we can inject variable into strings a lot easier
// console.log(`Hello, my name is ${name} and I am ${age} years old. My favourite drink is ${favDrink}.`)
// // we can also update our variable is we use "let"
// age = 28
// favDrink = "Tea"

// console.log(`Hello, my name is ${name} and I am ${age} years old. My favourite drink is ${favDrink}.`)

// ------------------------------------------------------------------------------------------------

// // Activity 1: Create a program the stores someone's name, age and favourite colour and log it to the console
// // in a complete sentence using Template Literals

// let name = "Safwan"
// let age = 27
// let favColour = "Green"

// console.log(`Hello, my name is ${name} and I am ${age} years old. My favourite colour is ${favColour}.`)


// // Activity 2: Create a program the stores what you will eat today for breakfast, lunch and dinner.
// // Log these to the console.


// let breakfast = "Weetabix"
// let lunch = "Pasta"
// let dinner = "Curry"

// console.log(`For breakfast I had ${breakfast} and for lunch I will have ${lunch}. For dinner I will have a ${dinner}.`)

// // // STRETCH: Update each of these variable for what you will eat tomorrow. Log these to the console.

// breakfast = "Cornflakes"
// lunch = "Stir Fry"
// dinner = "Pizza"

// console.log(`Tomorrow, for breakfast I intend to have ${breakfast}, for lunch I intend to have ${lunch}. For dinner I will have some ${dinner}`)


// // Activity 3: Create a program that calculates the number of days from today to your birth date.

// let myBirthday = new Date("2023-04-01")
// let dateToday = new Date()
// let calcTime = myBirthday.getTime() - dateToday.getTime()
// let timeDifference = calcTime / (10006060*24)
// console.log(`There are ${Math.round(timeDifference)} till my birthday`)


// // Activity 4: Create 9 variables: space1, space2... space 9. Assign either value "X", "o" or " ", to each of these variables.
// // Insert the variables into your board using the ${varName} syntax and make it look like the displayed board.

space1 = "X"
space2 = "O"
space3 = " "
space4 = "X"
space5 = "X"
space6 = " "
space7 = "O"
space8 = " "
space9 = " "


console.log("   |   |   ")
console.log(` ${space1} | ${space2} | ${space3} `)
console.log("   |   |   ")
console.log("-----------")
console.log("   |   |   ")
console.log(` ${space4} | ${space5} | ${space6} `)
console.log("   |   |   ")
console.log("-----------")
console.log("   |   |   ")
console.log(` ${space7} | ${space8} | ${space9} `)
console.log("   |   |   ")

