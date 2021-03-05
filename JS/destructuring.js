//extract array elements or object properties and store them in variables
console.log("DESTRUCTURING")
const [a,b] = [1,2]

console.log(a,b)

const person1 = {firstName:"Facundo",age:24};
const {firstName} = person1

console.log(person1)
console.log(firstName)