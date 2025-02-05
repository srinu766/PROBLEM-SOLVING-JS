let num = 5

function findFactorial(n){
    if(n < 0) {
        return null
    } else if(n == 0){
        console.log(n + " is 1")
    } else{
        fact = 1;   
        for(let i=1; i<=n; i++){
            fact *= i
        }
        console.log("factorial of " + n + " is " + fact)
    }
}

function findFactorial2(n){
    let fact = 1;
    for(let i=1; i<=n;i++){
        fact *= i
    }
    console.log(fact)
}


// findFactorial(num)
findFactorial2(num)