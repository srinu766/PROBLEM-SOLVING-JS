// 25-Factors_of_Positive_Number.js


let num = 12;


for(var i=1; i<=num; i++){
    if(num % i == 0){
        console.log(i)
    }
}


// function Findfactors(num){
//     let factors = []
//     for(var i=1; i<=num; i++){
//         if(num % i ==0){
//             factors.push(i)
//         }
//     }
//     return factors

// }

// console.log(Findfactors(num))

