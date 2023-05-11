//----question 1

// Get the current date
let today = new Date();

// Get the month, day, and year
let month = today.getMonth() + 1;
let day = today.getDate();
let year = today.getFullYear();

// Format the date 
let format_Date = month + "-" + day + "-" + year;

// Output the date
alert(format_Date);


//-----question 2 I used the if else statement

let randomNumber = Math.floor(Math.random() * 10) + 1;

// Prompt the user to input a guess
let userInput = prompt("Pick a guess between 1 and 10: ");

// Compare the user's guess to the random number
if (userInput == randomNumber) {
  console.log("Good work");
} else {
  console.log("Not matched.");
}

//-----question 3

let a = 19;
let b  = 100;
function findClosestToHundred(a, b) {
    // Calculate the absolute difference between each value and 100
    let aDiff = Math.abs(a - 100);
    let bDiff = Math.abs(b - 100);
  
    // Return the value with the smaller absolute difference
    return aDiff < bDiff ? a : b;
  }

  let closelToHundred = findClosestToHundred(a, b);
  alert(`The number closest to Hundred is ${closelToHundred}`);


//----question 4

function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
      } else if (i % 3 === 0) {
        console.log("Fizz");
      } else if (i % 5 === 0) {
        console.log("Buzz");
      } else {
        console.log(i);
      }
    }
  }
fizzBuzz();


//-----question 5

// Create an array
const phoneBrands = ["pixel", "iphone", "xiaomi", "samsung", "huawei"];

// Print the items in the array
for (const phoneBrands of phoneBrands) {
  alert(phoneBrands);
}












