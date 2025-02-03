const arr = [35, 54, 35, 78];


function RemoveDublicates(arr){
    let uniqueArr = [];

    for(let i=0; i<arr.length; i++){
        let isDublicate = false;

        for(let j=0; j<i; j++){
            if(arr[i] === arr[j]){
                isDublicate = true;
                break;
            }
        }
        if(!isDublicate){
            uniqueArr.push(arr[i]);
        }
    }
    return uniqueArr;
}


console.log(RemoveDublicates(arr))





// const arr = [35, 54, 35, 78];

// function RemoveDublicates(arr){
//     let unique = [];

//    for(let i=0; i<arr.length; i++){
//     if(!unique.includes(arr[i])){
//         unique.push(arr[i])
//     }
//    }

//    return unique

// }

// console.log(RemoveDublicates(arr))