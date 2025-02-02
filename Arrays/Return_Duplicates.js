const arr = [35, 54, 35, 78, 35, 54];

function ReturnDublicates(arr){
    let unique = [];
    let dublicates = [];

    for(let i=0; i<arr.length; i++){
        let isDublicate = false;

        for(let j=0; j<i; j++){
            if(arr[i] === arr[j]){
                isDublicate = true;
                break;
            }
        }
        if(isDublicate && !dublicates.includes(arr[i])){
            dublicates.push(arr[i])
        }
        // if(!isDublicate){
        //     unique.push(arr[i])
        // }
    }
    return dublicates
}



console.log(ReturnDublicates(arr)); 