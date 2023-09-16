"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createCar(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model,
    };
    for (var _a = 0, options_1 = options; _a < options_1.length; _a++) {
        var option = options_1[_a];
        for (var key in option) {
            if (option.hasOwnProperty(key)) {
                car[key] = option[key];
            }
        }
    }
    return car;
}
var myCar = createCar("Toyota", "Camry", { color: "Blue", year: 2023 });
console.log(myCar);
