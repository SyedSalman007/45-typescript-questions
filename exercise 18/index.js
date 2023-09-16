var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var toVisit = ["Germany", "Finland", "Spain", "Italy", "Armenia"];
console.log("\nArray original order: \n".concat(toVisit));
var copy = __spreadArray([], toVisit, true).sort(); // shallow copy
console.log("\nArray in Alphabetical order: \n".concat(copy));
console.log("\nArray original order: \n".concat(toVisit));
console.log("\nArray in Reverse Alphabetical order: \n".concat(copy.reverse()));
console.log("\nArray original order: \n".concat(toVisit));
console.log("\nOriginal array order is reverse: \n".concat(toVisit.reverse()));
console.log("\nOriginal array back to its original form: \n".concat(toVisit.reverse()));
console.log("\nArray in Alphabetical order: \n".concat(toVisit.sort()));
console.log("\nArray in Reverse Alphabetical order: \n".concat(toVisit.reverse()));
