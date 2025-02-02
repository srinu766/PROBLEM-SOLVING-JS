const arr = ["apple", "banana", "apple", "apple", "orange", "banana"]; 

function ReturnDublicates(arr){
    let unique = [];
    let dublicats = [];

    for(var i=0; i<arr.length; i++){
        let isDublicate = false;

        for(var j=0; j<i; j++){
            if(arr[i] === arr[j]){
                isDublicate = true;
                break;
            }
        }
        if(isDublicate && !dublicats.includes(arr[i])){
            dublicats.push(arr[i]);
        }
    }

    return dublicats

}

console.log(ReturnDublicates(arr))