function RemoveDublicates(arr) {
  const newArr = [];

  for(let i=0; i<arr.length; i++){
    let isDublicate = false;

    for(let j=0; j<i; j++){
        if(arr[j] === arr[i]){
            isDublicate = true;
            break
        }
    }
    if(!isDublicate){
        newArr.push(arr[i])
    }
  }
  return newArr;
}

const array = [1, 2, 3, 2, 3];

const res = RemoveDublicates(array);
console.log(res);
