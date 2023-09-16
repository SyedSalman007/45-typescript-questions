"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var age = 14;
if (age < 2) {
    console.log("The person is baby.\n");
}
else if (age >= 2 && age < 4) {
    console.log("The person is toddler.\n");
}
else if (age >= 4 && age < 13) {
    console.log("The person is kid.\n");
}
else if (age >= 13 && age < 20) {
    console.log("The person is teenager.\n");
}
else if (age >= 20 && age < 65) {
    console.log("The person is adult.\n");
}
else {
    console.log("The person is elder.\n");
}
