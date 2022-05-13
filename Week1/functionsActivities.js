// // Activity 1: Take this code and turn it into an arrow function syntax:

// // function factorial (n) {
// //     if ((n === 0) || ((n === 1)) {
// //         return 1;
// //     } else {
// //         return (n * factorial(n-1))
// //     }
// // }

// // console.log(factorial(33))


// const factorial = (n) => {
//     if ((n === 0) || (n === 1)) {
//         return 1;
//     } else {
//         return (n * factorial(n-1))
//     }
// }

// console.log(factorial(33))

// -------------------------------------------------------------------------------------------------------

// // Activity 2: Edit the below snippet to include two parameters
// // and a running order count updated when the function is called:

// let orderCount = 0

// const takeOrder = (topping, inch) => {
//     orderCount++
//     console.log(`${orderCount} ${inch} Pizza with ${topping}`)
// }

// takeOrder("Pineapple", "12'")
// takeOrder("Pineapple", "12'")
// takeOrder("Pineapple", "12'")
// takeOrder("Pineapple", "12'")

// -------------------------------------------------------------------------------------------------------

// // Activity 3: Cash Machine time! Let's create one that dispenses cash IF
// // your pin is correct and your balance is equal, to or more than, the amount you're trying to withdraw!

let PIN = 1234 
let balance = 130

const cashWithdrawl = (PIN, amount) => {
    if ((PIN == 1234) && (amount <= balance)) {
        console.log(`Withdrawing £${amount} from £${balance}`)
    } if ((PIN == 1234) && (amount > balance)) {
        console.log(`Insufficent funds. Your balance is £${balance}.`)
    } if (PIN != 1234) {
        console.log("Incorrect PIN")
    }
}

cashWithdrawl(1234, "100")


