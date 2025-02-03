// let a = 10;
// let b = 20;



// method 1

// let temp;

// temp = a;
// a = b;
// b = temp;

// console.log("a", a);
// console.log("b", b)




// method 2
// const swapWithDistructuring =  [a,b] = [b,a];

// console.log("swapWithDistructuring", swapWithDistructuring)




// method 3

// a = a+b; // 10+20 = 30;
// b = a-b; // 30-20 = 10;
// a = a-b; // 30-10 = 20;

// console.log("without third variable");
// console.log("a", a);
// console.log("b", b);



// practice 

// let temp;

// temp = a;
// a = b;
// b = temp;

// let swapWithDistructuring = [a,b] = [b,a];


let a = 10;
let b= 20;

a = a+b;
b= a-b;
a = a-b;

console.log("a1", a);
console.log("b1", b);