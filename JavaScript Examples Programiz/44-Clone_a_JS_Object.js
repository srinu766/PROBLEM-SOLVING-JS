// 44-Clone_a_JS_Object.js


const person = {
    name: 'John',
    age: 21,
}


// const copy = Object.assign({}, person)
// const copy = { ... person}
const copy = JSON.parse(JSON.stringify(person));


// const copy = person; // not perfect 

copy.name = 'Peter';

console.log(person)

console.log(copy)