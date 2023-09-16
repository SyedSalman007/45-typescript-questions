"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function make_shirt(size, message) {
    if (size.toLowerCase() === 'large' || size.toLowerCase() === 'medium') {
        return "For size ".concat(size.toLowerCase(), ". \n").concat(message);
    }
    return "For size ".concat(size.toLowerCase(), ".\n").concat(message);
}
console.log(make_shirt("LARGE", "If things do not go right take left:"));
