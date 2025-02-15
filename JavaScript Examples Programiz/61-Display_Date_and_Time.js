

const date = new Date(2025,2,12,9,25,30)

const date1 = date.toDateString()//Wed Mar 12 2025
const time =date.toTimeString() //09:25:30 GMT+0530 (India Standard Time)
// const time =date.toLocaleTimeString() //9:25:30 am
console.log(date1)
console.log(time)