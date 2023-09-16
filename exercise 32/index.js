"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var current_users = ['salman', 'ali', 'abid', 'taha', 'mustafa'];
var new_users = ['john', 'SALMAN', 'Eric', 'ABID', 'Sam'];
for (var i = 0; i < new_users.length; i++) {
    var index = current_users.indexOf(new_users[i].toLowerCase());
    if (index == -1) {
        console.log("The username is available.\n");
    }
    else {
        console.log("".concat(new_users[i], " please use different username.\n"));
    }
}
