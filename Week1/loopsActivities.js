// // Activity 1: Create an array that lists your favourite films, up to 5 elements.
// // Add 2 more using a method and use a loop to cycle through the array

// let FavFilms = ["A Bronx Tale", "Casino", "Shutter Island", "The Hateful Eight", "The Incredibles"]

// FavFilms.splice(2, 0, "Harry Potter", "Lord of the Rings")

// console.log(FavFilms)

// console.log(FavFilms.length)

// for(let i = 0; i < FavFilms.length; i++){
//     console.log(FavFilms[i])
// }

// -----------------------------------------------------------------------------------------------------------------

// // Activity 2: Generate 6 random numbers between 1-50 and log them to the console

// for(let i = 0; i < 6; i++){
//     console.log(Math.round(Math.random()*50))
// }

// -----------------------------------------------------------------------------------------------------------------

// Activity 3: Create a loop to log 0-9 and then create a loop to log 9-0


// for(let i = 0; i < 10; i++){
//     console.log(i)
// }

// for(let i = 9; i >= 0; i--){
//     console.log(i)
// }

// -----------------------------------------------------------------------------------------------------------------

// Activity 4: Display 4 films stored in an array.
// Use a for loop to show each film.
// Use an if statement to check if the 3rd film in the array is Ghostbusters.
// If it is, return "Yay it's Ghostbusters". If it isn't return "Boo! We want Ghostbusteres!"


// let Films = ["Django Unchained", "Black Panther", "GhostBusters", "Spider-Man"]

// for(let i = 0; i < Films.length; i++){
//     console.log(Films[i])
// }
// if (Films[2] === "GhostBusters"){
//     console.log("Yay, it's Ghostbusters!")
// }   else {
//     console.log("Boo! We want Ghostbusters!")
// }

// -----------------------------------------------------------------------------------------------------------------

// // Activity 5: Generate a random number between 1 and 30 six times.
// // For each random number generated, check if this number is divisble by 7 or not.
// // Log a message to the console if it is divisble by 7 or not.

// let RandomNumList = []

// for(let i = 0; i < 6; i++){
// RandomNumList.push(Math.round(Math.random()*30))
// }

// console.log(RandomNumList)

// for(let i = 0; i < RandomNumList.length; i++) {
//     if (RandomNumList[i] % 7 == 0){
//         console.log(`${RandomNumList[i]} is divisble by 7.`) 
//     }   else {
//         console.log(`${RandomNumList[i]} is not divisible by 7.`)
//     }
// }

// Activity 6: Imagine you're a programmer for a social media platform. You have been tasked with building a prototype for a mutual followers program.
// Create 2 arrays of followers e.g. bobsFollowers & hannahsFollowers.
// In these arrays place 4 names as strings. Make sure there are 2 names that are in BOTH arrays. 
// Using a nested loop iterate over both arrays and console.log out the matching followers.

let bobsFollowers = ["Farhan Zahoor", "Ali Haider", "Ismaeel Arshad", "Qamar Nasir"]
let jonsFollowers = ["Ali Haider", "Farhan Zahoor", "Mobeen Arshad", "Shoaib Ahmed"]

for(let bobsIndex = 0; bobsIndex < bobsFollowers.length; bobsIndex++) {
    for(let jonsIndex = 0; jonsIndex < jonsFollowers.length; jonsIndex++) {
        if (bobsFollowers[bobsIndex] == jonsFollowers[jonsIndex]) {
        console.log(`${bobsFollowers[bobsIndex]} follows Bob and Jon`)
        }
    }
}


// Activity 7 - Research on do...while loop, find out about the difference between
// for loop, while loop and do...while loop. Give an example of each. What are the pros and cons?

// While Loop
// Uses a condition and the program will run WHILE the condition is met
// Pros - Can iterate through part of an array example is only want to iterate 1/2 the list
// Cons - Can get stuck on an loop if condition is not met 

// For Loop 
// Iterates over an array for a condition i.e for the length of a list 
// Pros - can iterate over a full list if you dont know long the list is i.e a list of over 1200000 items 
// Con - cant not iterate over part of list ? 