// 17-Fibonacci_Series.js

// 0, 1, 1, 2, 3, 5, 8, 13, 21, ...

let num = 5;

let n1 = 0;
let n2 = 1;

console.log("fibonacci");
for(let i=1; i<=num; i++){
    console.log(n1)
    let next = n1 + n2;
    n1 = n2;
    n2 = next;
}