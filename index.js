let arr = [2, 4, 6, 8, 9,2, 11, 13, 17, 18, 20];

let evenNumbers = []


for(let i=0; i<arr.length; i++){
    if(arr[i] % 2 == 0){
        if(!evenNumbers.includes(arr[i])){
            evenNumbers.push(arr[i])
        }
    }
}

 console.log( evenNumbers)