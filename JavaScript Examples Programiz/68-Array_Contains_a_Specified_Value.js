
const array = ['you', 'will', 'learn', 'javascript'];


// const hasValue = array.includes('will')

// console.log(hasValue)


function checkArrayIncludes(str){
    let hasValue = false;

    for(let i=0; i<=str.length; i++){
        if(str[i] == 'learn'){
            hasValue = true
            break;
        }
    }
    return hasValue
}

console.log(checkArrayIncludes(array))

