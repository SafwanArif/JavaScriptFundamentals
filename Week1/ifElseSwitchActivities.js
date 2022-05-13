// Week 1 Day 2
// If Else and Switch

// Activity 1 - Create a variable called age. Write an if statement that logs “Yes I can serve you” if the age is greater than 17 and else logs “You aren’t old enough”.

// set a variable
let age = 38;
// comparison if greater than 17
if (age > 17) {
  // print in terminal
  console.log("Yes I can serve you");
  // else less than or equals to 17
} else {
  // print in terminal
  console.log("You aren’t old enough");
}

// Take your if statement and add a variable called country in.
let age1 = 38;
let country = "USA";

// if great than 17 AND country is UK
if (age > 17 && country == "UK") {
  // print in terminal
  console.log("Yes I can serve you");
  //  less than or equal to 17 and not in UK
} else {
  // print in terminal
  console.log("Sorry I can not serve you");
}

// Activity 2 Create a variable for any pizza topping.
// Create a switch statement, if the topping is one of your favourite ingredients, log to the console “These are important ingredients for my pizza.” If you don’t mind having Pepperoni for example log to the console “I don’t mind having ${topping} on my pizza.
// Finally, for any topping you don’t like log “${topping} should not be on a pizza.”

// create variable
let pizzaTopping = "Ham";

// switch will check for topping
switch (pizzaTopping) {
  // if pizzaTopping is Chicken
  case "Chicken":
    // print in terminal
    console.log("These are important ingredients for my pizza.");
    // end code
    break;
  // if pizzaTopping is onions
  case "Onions":
    // print in terminal
    console.log(`I don’t mind having ${pizzaTopping} on my pizza`);
    // end code
    break;
  // if pizzaTopping is pineapple
  case "Pineapple":
    // print in terminal
    console.log(`${pizzaTopping} should not be on a pizza.`);
    // end of
    break;
    // if something other than chicken, pineapple or onions
  default:
    //  print in terminal
    console.log(`Im not sure about ${pizzaTopping} on a pizza`)
}

// Activity 3 Create a variable called password.
// Check how many letters are in the password, if there are less than 8, log to the console that the password is too short. Otherwise log the password to the console.

// creat var
let password = "password";

// if length of password is less than 8
if (password.length < 8) {
  // print to terminal
  console.log("The password is too short");
  // else it must be great than or equal to 8
} else {
  // print to terminal
  console.log(password);
}

// Activity 4 Create a variable called num.
// Check if the variable is divisible by 3 or 5. If it is, log “This number is divisible by 3 or 5”. Otherwise log something else.

//  create variable
let num = 15;

// if num divisible by 3 OR 5
if (num % 3 === 0 || num % 5 === 0) {
  // print in terminal
  console.log("This number is divisible by 3 or 5");
  // it is not divisible by 3 OR 5
} else {
  // print to terminal
  console.log("This number is not divisible by 3 or 5");
}

// Activity 5 Create a variable called num.
// If num is divisible by 3 log “fizz” to the console, if it’s divisible by 5 log “buzz” to the console, if it’s divisible by both 3 and 5 log “fizz buzz” to the console. Otherwise log num to the console.

// create variable
let num1 = 15;
// if num1 is divisable by 3 AND 5
// at top becuase if you do 15%5 or 15%3 it will print them first
// if (num1 % 5 === 0){
//   console.log("buzz");
// } 
 if (num1 % 3 === 0 && num1 % 5 === 0) {
  // print to terminal
  console.log("fizz buzz");
  // Only divisible by 3
} else if (num1 % 3 === 0) {
  // print to terminal
  console.log("fizz");
}
  // Only divisible by 5
else if (num1 % 5 === 0) {
  // print tpo terminal
  console.log("buzz");
}

// Activity 6 Create a variable called num.
// Check if the number is a palindrome (looks the same forward as it does backwards e.g. 1001 or 20202).

// set variable as number datatype
let num2 = 1002;
// changed to string datatype
let text = num2.toString();
// split the string "1","0","0","2"
let arrayText = text.split("");
// reverse the string "2","0","0","1"
let reverseArray = arrayText.reverse();
//  Join back to gether "2001"
let joinArray = reverseArray.join("");

// if "1002" equal "2001"
if (text == joinArray) {
  // print to terminal
  console.log("Palindrome");
  // does not equal
} else {
  //  print to terminal
  console.log("Not a Palindrome");
}

// Activity 7 Create a variable called time, a variable called placeOfWork and a variable called townOfHome. Create an if statement that logs to the console where someone is at times of the day. E.g. if the time is 7 I’m at home, at 8 I’m commuting, at 9 I’m at work.

// creat my variables
let time = 21;
let placeOfWork = "Liverpool";
let townOfHome = "Wallasey";

// if time is less than 9 AND greater than 7
if (time < 9 && time > 7) {
  // print to terminal
  console.log(`Commuting from ${townOfHome} to ${placeOfWork}`);
  // if time greater than 9 AND less than 18
} else if (time > 9 && time < 18) {
  // print to terminal
  console.log(`In work in ${placeOfWork}`);
  // if time greater than 18 AND less than 20
} else if (time > 18 && time < 20) {
  // print to terminal
  console.log(`Commuting from ${placeOfWork} to ${townOfHome}`);
  // if none of above anything before 7 and after 20
} else {
  // print to ternimal
  console.log(`At home in ${townOfHome}`);
}

// Activity 8 Take the string “jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuh gtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi”. Find the index of a last vowel in the string.

// declare variable
let theString =
  "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuh gtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi";
  // prints the index of the last letter i
console.log(theString.lastIndexOf("i"));

// Activity 9 Create a variable called word that takes a string. Create an if statement that checks if the last letter is the same as the first. If it is return true, otherwise return false.

//  declare my variabvle
let word = "drippled";
// if index 0 of the word is the same as the index of the length of the word - 1
// why - 1 ? because indexing starts with 0
if (word[0] == word[word.length-1]) {
  // print in terminal
  console.log(true);
  //  else first and last letter are not the same
} else {
  // print in terminal
  console.log(false);
}

// Activity 10 Create two variables called num1 and num2.
// Create an if statement that checks if the result of the sum is even. If it is return the number, otherwise return the numbers multiplied together.

// create my 2 variables
let theNum1 = 1;
let theNum2 = 15;
//  variable for the sum
let sum = theNum1 + theNum2;
//  % is divisible
// if sum is divisible by 2
if (sum % 2 == 0) {
  // print in terminal
  console.log(sum);
  //  ekse its not divisble by 2
} else {
  //  not divisible so multiply the two numbers
  console.log(theNum1 * theNum2);
}
