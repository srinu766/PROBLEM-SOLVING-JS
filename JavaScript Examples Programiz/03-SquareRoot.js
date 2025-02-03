const n1 = 9;
// console.log(Math.sqrt(n1))


// Exponentiation Operator  = ** 

const sqrt = n1 ** 0.5

// console.log("sqrt",sqrt)

function findSqrt(n){
    let result = 0;

    for(let i=1; i<=n;i++){
        if(i*i === n){
            result = i;
            break;
        } else{
            result = -1
        }
    }
     return result;
}

console.log(findSqrt(n1))