// 27-Guess_Number.js


let num = 5

function GuessNumber(num){
    let msg = ""

    const randam = Math.floor(Math.random() * 10)+ 1

    if(randam != num){
        msg += "You loose"
    }
    if(randam === num){
         msg += "Congrats you won❤️"
    }
     return msg
}

console.log(GuessNumber(num))