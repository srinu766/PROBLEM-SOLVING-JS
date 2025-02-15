// const formatter = new Intl.NumberFormat('en-IN', {
//     style: 'currency',
//     // currency: 'USD'
//      currency: 'INR'
// });


// console.log(formatter.format(25000000))




const num = 2000;
const result = '₹' + num.toFixed(2);
console.log(result)