"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function make_sandwich() {
    var ingredient = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        ingredient[_i] = arguments[_i];
    }
    if (ingredient.length == 0) {
        console.log("\nYou ordered an empty sandwich. Please add some items.\n");
    }
    else {
        console.log("\nBelow is the list of ingredients I want in my sandwich:\n");
        for (var i = 0; i < ingredient.length; i++) {
            console.log("".concat(i + 1, ". ").concat(ingredient[i]));
        }
    }
}
make_sandwich("Turkey", "Lettuce", "Tomato", "Mayo");
make_sandwich("Ham", "Swiss cheese", "Mustard");
make_sandwich();
