// let weather = "sunny"

// if (weather == "sunny") {
//     console.log("Well, I better wear my suncream!")
// }   else if (weather == "rainy"){
//     console.log("Better take an umbrella")
// } else {
//     console.log("Hmmm, it could go either way")
// } 


// if (1 === 1) {
//     console.log(true)
// } // === is a Comparison Operator that checks if the values AND data type are equal.
// else {
//     console.log(false)
// }


// if (1 === "1") {
//     console.log(true)
// }
// else {
//     console.log(false)
// }

// if (1 == 1) {
//     console.log(true)
// } // == is a Comparison Operator that checks if the values are equal REGARDLESS of the data type.
// else {
//     console.log(false)
// }


// if (1 == "1") {
//     console.log(true)
// }
// else {
//     console.log(false)
// }


// if (1 != "1") {
//     console.log(true)
// } // != is a Comparison Operator that checks if the values are NOT equal REGARDLESS of data type.
// else {
//     console.log(false)
// }


// if (1 != 1) {
//     console.log(true)
// }
// else {
//     console.log(false)
// }


// if (1 !== "1") {
//     console.log(true)
// } // !== is a Comparison Operator that checks if the values AND data type are NOT equal.
// else {
//     console.log(false)
// }


// if (1 !== 1) {
//     console.log(true)
// }
// else {
//     console.log(false)
// }

// let place = "Manc"
// let weather = "Cloudy"

// if (place == "Manc" && weather == "Sunny") {
//     console.log("Check again")
// } // && is a Logical Operator that checks both conditions are met in order for the code to run.
// else if (place == "Manc" && weather == "Rainy") {
//     console.log("Obvs")
// }
// else {
//     console.log ("What?! It isn't raining?!")
// }


// let day = "Saturday"

// if (day == "Saturday" || dau == "Sunday"){
//     console.log("It's the weekend!")
// }
// else {
//     console.log("Can't wait for the weekend!")
// }


// let car = "Peugeot"

// if (car == "Ford" || car == "GM"){
//     console.log("You've got an American car!")
// } // || is a Logical Operator that checks one of the conditions are met in order for the code to run.
// else if(car == "Peugeot" || car == "Citroen"){
//     console.log("You've got a French car!")
// }
// else if(car == "Honda" || car == "Toyota" || car = "Suzuki"){
//     console.log("Japanese cars are dead quiet!")
// }
// else if (car == "Mercedes"){
//     console.log("You are proper posh German")
// }
// else if(car == "Volkswagen"){
//     console.log("German aren't that bad at all!")
// }
// else if (car == "Hyundai" || car == "Kia"){
//     console.log("South Korean cars are getting popular!")
// }
// else{
//     console.log("Your car is not in the top ten companies in the world.")
// }

// // "Switch" allows us to make this a lot simpler.

// // switch(experession){
// //    case x:
// //        // code here
// //        break
// //   case y:
// //       // code here
// //       break
// //   default:            // default is like "else"
// //       // code here
// //}



let car = "Kia"

switch(car){
    case "Ford":
    case "GM":
        console.log("You've got an American car!")
        break
    case "Peugeot":
    case "Citroen":
        console.log("You've got a French car!")
        break
    case "Honda":
    case "Toyota":
    case "Suzuki":
        console.log("Japanese cars are dead quiet!")
        break
    case "Mercedes":
        console.log("You are proper posh German")
        break
    case "Volkswagen":
        console.log("German aren't that bad at all!")
        break
    case "Hyundai":
    case "Kia":
        console.log("South Korean cars are getting popular!")
        break
default:
    console.log("Your car is not in the top ten companies in the world.")
}