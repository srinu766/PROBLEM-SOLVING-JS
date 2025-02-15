
const person ={
    name :"srinu",
    age:25
}

const stringify = JSON.stringify(person)

const parse = JSON.parse(stringify)


console.log("person", person)
console.log("stringify", stringify)
console.log("parse", parse)