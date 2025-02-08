let string = "school";
let letterToCheck = "o";

function countString(str, letter) {
  let count = 0;

  for (let i = 0; i <= str.length; i++) {
    // if(str.charAt(i) == letter){
    if (str[i] == letter) {
      count += 1;
    }
  }
  return count;
}

const result = countString(string, letterToCheck);
console.log(result);
