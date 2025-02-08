// let vowels = ["a", "e", "i", "o", "u"];

// function countVowel(str) {
//   let count = 0;
//   for (let letter of str.toLowerCase()) {
//     if (vowels.includes(letter)) {
//       count++;
//     }
//   }
//   return count;
// }

// const string = "JavaScript program";

// const result = countVowel(string);

// console.log(result);



let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

function countVowel(str){
    let count =0;
    for(let i=0; i<=str.length; i++){
        let isVowel = false;
        for(let j=0; j<vowels.length; j++){
            if(str[i] == vowels[j]){
                isVowel = true;
                break
            }
        }
        if(isVowel){
            count++
        }
    }
    return count
}




const string = "JavaScript program";
const result = countVowel(string);

console.log(result);  // Output: 5