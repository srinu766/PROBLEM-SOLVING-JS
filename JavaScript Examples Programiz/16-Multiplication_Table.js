

let num =10;
let range =10

function MultiplicationTable(n){

    for(let i=1; i<=range; i++){
        let result = n * i;
        console.log(`${n} * ${i} = ${result}`)
    }

}

MultiplicationTable(num)