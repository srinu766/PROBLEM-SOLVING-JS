

const arr1 = [1, 2, 3,4,5];
const arr2 = [4, 5, 6];

const mergedArr = [];
let index = 0;


for(let i=0; i<arr1.length; i++){
    mergedArr[index] = arr1[i];
    index++
}

for(let j=0; j<arr2.length; j++){
    mergedArr[index] = arr2[j];
    index++
}

console.log(index)


console.log(mergedArr)


function RemoveDublicates(arr){
    let uniqueArr  =[];
    for(let i=0; i<arr.length; i++){
        let isDublicate = false;

        for(let j=0; j<i; j++){
            if(arr[i] === arr[j]){
                isDublicate = true
                break;
            }
        }
        if(!isDublicate){
            uniqueArr.push(arr[i]);
        }
    }
     return uniqueArr

}

const res = RemoveDublicates(mergedArr)

console.log(res)