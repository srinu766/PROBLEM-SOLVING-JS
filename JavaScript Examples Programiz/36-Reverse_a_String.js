const string = "hello world";

// function reverseString(str){
//     let newString = "";
//     let len = str.length;

//     for(let i=len-1; i>=0; i--){
//         newString += str[i];
//     }

//     return newString

// }

// let result = reverseString(string);
// console.log(result);



// Example 2: Reverse a String Using built-in Methods
let  stringSplit = string.split("");

let strreverse = stringSplit.reverse()
let joinstr = strreverse.join("")
console.log(joinstr)