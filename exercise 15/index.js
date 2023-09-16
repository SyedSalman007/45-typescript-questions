"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var guestList = ['Abid', 'Taha', 'Mustafa', 'Affan', 'Moaz'];
for (var i = 0; i < guestList.length; i++) {
    console.log("Hello ".concat(guestList[i], ":\nYou are invited on the dinner party on the coming Sunday.") +
        "You presence will be highly appreciated.\n");
}
console.log("Unfortunately ".concat(guestList[3], " won't be able to attend the dinner."));
guestList[3] = 'Zain';
console.log("\n\nNew guest list\n\n");
for (var i = 0; i < guestList.length; i++) {
    console.log("Hello ".concat(guestList[i], ":\nYou are invited on the dinner party on the coming Sunday.") +
        "You presence will be highly appreciated.\n");
}
