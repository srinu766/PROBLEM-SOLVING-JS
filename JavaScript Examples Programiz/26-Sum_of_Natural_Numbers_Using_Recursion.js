// Recursion

// Recursion in JavaScript is a programming technique where a function calls itself to solve a problem.

function sum(num) {
  if (num > 0) {
    const result = num + sum(num-1)
     return result
  } else {
    return num;
  }
}

let num = 5;
let result = sum(num);

console.log(result);
