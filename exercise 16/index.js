"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var guestList = ['Abid', 'Taha', 'Mustafa', 'Affan', 'Moaz'];
// for(let i = 0; i < guestList.length; i++)
// {
//     console.log(`Hello ${guestList[i]}:\nYou are invited on the dinner party on the coming Sunday.`+
//     `You presence will be highly appreciated.\n`);
// }
// console.log(`Unfortunately ${guestList[3]} won't be able to attend the dinner.`);
guestList[3] = 'Zain';
// console.log("\n\nNew guest list\n\n")
// for(let i = 0; i < guestList.length; i++)
// {
//     console.log(`Hello ${guestList[i]}:\nYou are invited on the dinner party on the coming Sunday.`+
//     `You presence will be highly appreciated.\n`);
// }
console.log("\nAs there is a much bigger table available for dinner table we are inviting more people.");
guestList.unshift("Tanveer");
var middle = guestList.length / 2;
guestList.splice(3, 0, "Hashim");
guestList.push("Hassan");
for (var i = 0; i < guestList.length; i++) {
    console.log("Hello ".concat(guestList[i], ":\nYou are invited on the dinner party on the coming Sunday.") +
        "You presence will be highly appreciated.\n");
}
