let operator = "+";

let n1 = 20;
let n2 = 10;

let result;

// if (operator === "+") {
//   result = n1 + n2;
// } else if (operator === "-") {
//   result = n1 - n2;
// } else if(operator === "*"){
//     result = n1 * n2;
// }else{
//     result = n1/n2
// }

switch(operator){
    case '+':
        result = n1 + n2;
        console.log(result);
        break;
    case '-':
        result = n1 - n2;
        console.log(result)
        break;
    case '*':
        result = n1 * n2;
        console.log(result);
        break;
    case '/':
        result = n1 / n2;
        console.log(result);
        break;
    default:
        console.log("Invalid operator");
        break;
}

// console.log(result)