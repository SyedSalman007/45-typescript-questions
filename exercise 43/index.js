"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function show_magician(magician_name) {
    for (var i = 0; i < magician_name.length; i++) {
        console.log(magician_name[i]);
    }
}
function make_great(magician_name) {
    var new_list = [];
    for (var i = 0; i < magician_name.length; i++) {
        new_list.push("Great ".concat(magician_name[i].slice(0, 1).toUpperCase()).concat(magician_name[i].slice(1, magician_name[i].length).toLowerCase()));
    }
    return new_list;
}
var name = ["saLman", "ali", "joHN", "saM", "mAX"];
var new_list = make_great(name);
console.log("\nOld list\n");
show_magician(name);
console.log("\nNew list\n");
show_magician(new_list);
