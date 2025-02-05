// * * * * *
// *     *
// *   *
// * *
// *



let num = 5;
let pattern = "";

if(num > 1){
    for(let i=1; i<=num; i++){
        for(let j=0; j<=(num-i); j++){
            if(j==0 || i == 1 || j==(num-i)){
                 pattern += "* "
            } else{
                pattern += "  "
            }
           
        }
        pattern += "\n"
    }
    console.log(pattern)

} else{
    console.log("not valid")
}