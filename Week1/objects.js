let offer = "none";
let time = 1200;

const cafe = {
    name: "Whitesheep",
    seatingCapacity: 100,
    hasSpecialOffers: true,
    drinks: [
        "Cappuccino",
        "Latte",
        "Filter Coffee",
        "Tea",
        "Hot Chocolate"
    ],
breakfastOffer: "Free croissant with coffee",
lunchOffer: "Free drink with surprisingly priced sandwich",
noOffer: "Sorry, no offer",
openCafe() {
    if(this.hasSpecialOffers) {
        return "Time for a special offer!"
    }
},
closeCafe() {
    return "We are close, come back tomorrow!"
    }
}

if (time < 1100){
    offer = cafe.breakfastOffer
    console.log(cafe.breakfastOffer)
} else if (time < 1500) {
    offer = cafe.lunchOffer
    console.log(cafe.lunchOffer)
}

console.log(cafe.openCafe())




// let day = "Saturday"
// let alarm

// const alarms = {
//     weekendAlarm: "no alarm needed",
//     weekdayAlarm: "get up at 7am"
// }

// if (day === "Saturday" || "Sunday"){
//     console.log(alarm.weekendAlarm)
// } else {
//     console.log(alarm.weekdayAlarm)
// }




