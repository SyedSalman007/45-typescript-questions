"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var users = ['salman', 'ali', 'admin', 'john', 'eric'];
for (var i = 0; i < users.length; i++) {
    if (users[i] === "admin") {
        console.log("Hello admin, would you like to see a status report.\n");
    }
    else {
        console.log("Hello ".concat(users[i], ", thank you for logging in again.\n"));
    }
}
