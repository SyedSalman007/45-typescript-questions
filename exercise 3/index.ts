export {}

let name = "saLmAn"

// print in lowercase
console.log(`${name.toLowerCase()}`)
// print in uppercase
console.log(`${name.toUpperCase()}`)
// print in titlecase
let titlecase = name.charAt(0).toUpperCase() + name.substr(1).toLowerCase();
console.log(titlecase)