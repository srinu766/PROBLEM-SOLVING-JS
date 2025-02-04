//  22-Numbers_Have_Same_Last_Digit.js

let num1 = 25;
let num2 = 35;
let num3 = 46;

let lastDigitNum1 = num1 % 10;
let lastDigitNum2 = num2 % 10;
let lastDigitNum3 = num3 % 10;

if (lastDigitNum1 == lastDigitNum2 && lastDigitNum1 == lastDigitNum3) {
  console.log("all numbers having same last number " + lastDigitNum1);
} else {
  console.log("all numbers not having same last number");
}
