// console.log("Hello World".toUpperCase())

// console.log(Math.floor(Math.random() * 10))

// console.log("   |   |")
// console.log("   |   |")
// console.log("   |   |")
// console.log("-----------")
// console.log("   |   |")
// console.log("   |   |")
// console.log("   |   |")
// console.log("-----------")
// console.log("   |   |")
// console.log("   |   |")
// console.log("   |   |")

// // While Loop

// let gridArray = ["   |   |   ", "-----------"]

// let i = 1

// while (i < 12) {
//     if (i % 4 === 0){
//     console.log(gridArray[1])}
//     else {console.log(gridArray[0])}
//     i++;}


// // For Loop
const items = ["   |   |   ", "-----------"]
// i is the outer loop
// l is the inner loop
for(let i=0; i<3; i++){
    // for 3 iterations (l=2)
    for(let l=0; l<3; l++)
        console.log(items[0])
    // if i equals to break (end) as we don't want the last "-----------"
    if (i === 2) {break}
    // if i isn't 2 it will print "-----------"
    console.log(items[1])
}