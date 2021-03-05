
//used to split up array elements or object properties
//this case we wont be using same pointer to Person, just spread its items or attributes
console.log("SPREAD OPERATOR")


const names = ["Facundo","Franco","Fernando"]
const newNames = [...names, "Agustin"]
console.log(names)
console.log(newNames)

const Person = {
    name:"Facundo",
    age:34,
}

const newerPerson = {
    ...Person,
    likes:["rolling","learning"]
}
console.log(Person)
console.log(newerPerson)