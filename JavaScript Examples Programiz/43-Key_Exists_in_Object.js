// 43-Key_Exists_in_Object.js


const obj = {
        name: "John",
        age: 30,
        city: "New York"
    };
    
    // const key = "name";
    
    // if (key in obj) {
    //     console.log(`${key} exists in the object.`);
    // } else {
    //     console.log(`${key} does not exist in the object.`);
    // }

    const haskey = obj.hasOwnProperty("name")
    console.log(haskey)