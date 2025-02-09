// object 1
const person = {
    name: 'Jack',
    age:26
}

// object 2
const student = {
    gender: 'male'
}

// const newObj = {...person, ...student}  // using spread opertar
const  newObj = Object.assign({}, person,  student)  // using Object.assign
console.log(newObj)