
function emptyArray(arr){
    arr = []
    // arr.splice(0, arr.length);
    // arr.length = 0
    return arr
}
const array = [1,2,3]
const result = emptyArray(array);
console.log(result);