"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function describe_city(city, country) {
    if (country === void 0) { country = "pakistan"; }
    console.log("".concat(city.slice(0, 1).toUpperCase()).concat(city.slice(1, city.length).toLowerCase()) +
        ", ".concat(country.slice(0, 1).toUpperCase()).concat(country.slice(1, country.length).toLowerCase(), " "));
}
describe_city('New yoRK', 'america');
describe_city('munich', 'germany');
describe_city('karachi');
