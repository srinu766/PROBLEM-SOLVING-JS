// Hollow_Left_Triangle.js

// *
// * *
// *   *
// *     *
// * * * * *

let num = 5;
let pattern = "";

if(num > 1){
    for(var i=1; i<=num; i++){
        for(var j=1; j<=i; j++){
            if(j==1 || j==i || i==num){
                pattern += "* "
            }else{
                pattern += "  "
            }
        }
        pattern += "\n"
    }

    console.log(pattern)

}else{
    console.log("not valid")
}
