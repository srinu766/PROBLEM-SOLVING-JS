
const year = 2024

function chackLeafYear(year){
   if((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0){
    return true
   } else{
    return false
   }

}

 const res =chackLeafYear(year);
console.log(res)