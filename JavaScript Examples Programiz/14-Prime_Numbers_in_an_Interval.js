let lowestNumner = 1
let heighestNumber = 50;


for(let i= lowestNumner; i<= heighestNumber; i++){
    let isPrime = true;

    for(let j=2; j<i; j++){
        if(i % j == 0){
            isPrime  = false;
            break;
        }
    }
    if(i > 1 && isPrime){
        console.log(i)
    }
}