

function removeItemFromArray(arr, n){
    let newArr = [];
    for(let i=0; i<arr.length; i++){
        if(arr[i] !== n){
            newArr.push(arr[i])
        }
    }
     return newArr

}


const result = removeItemFromArray([1, 2, 3 , 4 , 5], 3);

console.log(result);