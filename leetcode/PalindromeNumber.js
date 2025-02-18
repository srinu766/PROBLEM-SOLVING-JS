

function isPalindrome(x){

    if(x < 0){
        return false;
    }

    let rev = 0;

    while(x > rev){ 
        rev = rev * 10 + x % 10;
        x = parseInt(x / 10);
    }

    return x === rev || x === parseInt(rev / 10);
}


function isPalindromeString(str){
let len = str.length
for(let i=0; i<=len/2; i++){
    if(str[i] !== str[len-1-i]){
        return false
    }
}
return true
}


let x = "121"
let y = 'madam'

console.log(isPalindrome(x))
console.log(isPalindromeString(y))
// Output: trueisPalindromeString