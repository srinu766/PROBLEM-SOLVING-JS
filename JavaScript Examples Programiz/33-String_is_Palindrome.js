


function checkPalindrome(str1){

    let str = str1.toString().toLowerCase()

    let len = str.length
    for(let i=0; i<=len/2; i++){
        if(str[i] !== str[len-1-i]){
            return 'not a palindrome string'
        }
    }
    return "is a polindrome"
}


function checkPalindrome2(str1){

    const str = str1.toString().toLowerCase()


    let stringsplit = str.split("")
    let strReverse = stringsplit.reverse();
    let stringjoin = strReverse.join('')

    if(str == stringjoin){
        console.log(str + " is a palindrome")
    } else{
        console.log(str + " is not palindrome")
    }

}

const string =  "Madam"

const result = checkPalindrome(string)
console.log(result)


