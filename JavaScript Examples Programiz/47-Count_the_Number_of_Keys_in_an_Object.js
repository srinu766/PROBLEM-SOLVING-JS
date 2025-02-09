// program to count the number of keys/properties in an object

const student = { 
    name: 'John',
    age: 20,
    hobbies: ['reading', 'games', 'coding'],
};

// const count = Object.keys(student).length;

let count =0;
for(let key in student){
    console.log(key)
    count++
}


console.log(count)