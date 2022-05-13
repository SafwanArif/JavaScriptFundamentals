// const pressGrindBeans = () => {
//     console.log("Grinding for 20 seconds")
// }

// pressGrindBeans()

// let coffeeIsGrinding = false

// const pressGrindBeans = () => {
//     if (coffeeIsGrinding){
//         console.log("Stopping the grind")
//         coffeeIsGrinding = false
//     } else {
//         console.log("Grinding is about to begin")
//     }
//     coffeeIsGrinding = true;
// }

// pressGrindBeans()

// const cashWithdrawl = (amount, accnum) => {
//     console.log(`Withdrawing ${amount} from account ${accnum}`)
// }

// cashWithdrawl(300, 50449921)

// let accNumber = 50494922

// const cashWithdrawl = (amount, accnum) => {
//     console.log(`Withdrawing ${amount} from account ${accnum}`)
// }

// cashWithdrawl(300, accNumber)
// cashWithdrawl(400, accNumber)
// cashWithdrawl(250, accNumber)
// cashWithdrawl(520, accNumber)

// const addUp = (num1, num2) => {
//     return num1 + num2
// }

// addUp (7,3); // data wont be shown because not logged to console
// console.log(addUp(2,5))
// console.log(addUp(7,3))

const multiplyByNineFifths = (celsius) => {
    return celsius * (9/5)
}

const getFahrenheit = (celsius) => {
    return multiplyByNineFifths(celsius) +32
}

console.log("The temperature is " + getFahrenheit(15) + "°F")


