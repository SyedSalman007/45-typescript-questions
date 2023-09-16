export {};

console.log("\nCondition with Strings\n")

let name = "Salman";

console.log(name === "salman");

console.log(name === "Salman");

console.log(name.toLowerCase() === "salman");

console.log(name.toLowerCase() === "SALMAN");

console.log("\nCondition with Number\n");

let age = 22;

console.log(age === 21);

console.log(age === 22);

console.log(age > 20);

console.log(age < 20);

console.log(age >= 22);

console.log(age <= 20);

console.log("\nCondition using 'OR' and 'AND'\n");

console.log(age >= 22 && name === "Salman");

console.log(age >= 22 && name === "salman");

console.log("\nCondition on arrays\n");

let arr:number[] = [1,2,3,4,5,10,15,20];
let toFind = 5;
let index = arr.indexOf(toFind)

console.log(index !== -1);

toFind = 8;
index = arr.indexOf(toFind)

console.log(index !== -1);   // if index equals -1 then element do not exists