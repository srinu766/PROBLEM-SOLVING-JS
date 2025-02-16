let curresntdate = new Date();

let day = curresntdate.getDate()

let month = curresntdate.getMonth()+1
let year = curresntdate.getFullYear()

if(day<10){
    day = '0'+day
}
if(month<10){
    month = '0'+month
}


const formattedDate1  = month + '/' + day + '/'+ year
const formattedDate4  = day + '/' + month + '/'+ year
const formattedDate2  = month + '-' + day + '-'+ year
const formattedDate3  = day + '-' + month + '-'+ year


console.log(formattedDate3)