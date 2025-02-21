// function addElement(arr){
//     arr.unshift(4);
//     console.log(arr)
// }

function addElement(arr) {
  let newArray = new Array(arr.length + 1);

  newArray[0] = 4;

  for (let i = 0; i < arr.length; i++) {
    newArray[i + 1] = arr[i];
  }

  console.log(newArray);
}

const array = [1, 2, 3];

addElement(array);
