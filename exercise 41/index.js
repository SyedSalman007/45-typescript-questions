"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function show_magician(magician_name) {
    for (var i = 0; i < magician_name.length; i++) {
        console.log(magician_name[i].slice(0, 1).toUpperCase() + magician_name[i].slice(1, magician_name[i].length).toLowerCase());
    }
}
var name = ["saLman", "ali", "joHN", "saM", "mAX"];
show_magician(name);
