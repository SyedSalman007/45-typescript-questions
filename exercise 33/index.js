"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var ordinal;
for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] == 1) {
        ordinal = 'st';
    }
    else if (numbers[i] == 2) {
        ordinal = 'nd';
    }
    else if (numbers[i] == 3) {
        ordinal = 'rd';
    }
    else {
        ordinal = 'th';
    }
    console.log("\n".concat(numbers[i]).concat(ordinal));
}
