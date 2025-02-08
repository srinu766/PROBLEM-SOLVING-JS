let string = "javaScript";

function capitalizeFirstLetter(str){
    const capitalized   = str.charAt(0).toUpperCase() + str.slice(1)
    return capitalized
}

let result = capitalizeFirstLetter(string);

console.log(result)