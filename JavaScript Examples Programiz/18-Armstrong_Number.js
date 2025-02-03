// abcd... = an + bn + cn + dn + ...

// 153 = 1*1*1 + 5*5*5 + 3*3*3

// 1634 = 1*1*1*1 + 6*6*6*6* + 3*3*3*3 + 4*4*4*4


let num = 1634;

let numStr = num.toString();
let numStrLength = numStr.length

function checkArmstrong(n){

    let temp = n;
    let sum =0;
    while (temp > 0){
        remainder = temp % 10;
        // sum += remainder * remainder * remainder
        // sum += Math.pow(remainder ,numStrLength)
        sum += remainder ** numStrLength;
        temp = parseInt(temp/10);
    }
    if(sum === n){
        console.log(n + " is a Armstrong  number")
    } else{
        console.log(n + " not a Armstrong number")
    }

}

checkArmstrong(num)