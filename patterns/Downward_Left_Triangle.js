// Downward_Left_Triangle.js



// * * * * *
// * * * *
// * * *
// * *
// *


let num =5;
let pattern ="";

if(num > 1){
    for(let i=1; i<=num; i++){
        for(let j=0; j<=(num-i); j++){
            pattern += "* "
        }
        pattern += "\n"
    }
    console.log(pattern)

} else{
    console.log("not valid")
}