let toVisit:string[] = ["Germany", "Finland", "Spain", "Italy", "Armenia"];

console.log(`\nArray original order: \n${toVisit}`);

let copy = [...toVisit].sort(); // shallow copy

console.log(`\nArray in Alphabetical order: \n${copy}`);

console.log(`\nArray original order: \n${toVisit}`);

console.log(`\nArray in Reverse Alphabetical order: \n${copy.reverse()}`);

console.log(`\nArray original order: \n${toVisit}`);

console.log(`\nOriginal array order is reverse: \n${toVisit.reverse()}`)

console.log(`\nOriginal array back to its original form: \n${toVisit.reverse()}`)

console.log(`\nArray in Alphabetical order: \n${toVisit.sort()}`);

console.log(`\nArray in Reverse Alphabetical order: \n${toVisit.reverse()}`);
