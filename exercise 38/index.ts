export {}

function describe_city(city:string, country:string = "Pakistan")
{
    console.log(`${city.slice(0, 1).toUpperCase()}${city.slice(1,city.length).toLowerCase()}` +
    ` is in ${country.slice(0, 1).toUpperCase()}${country.slice(1,country.length).toLowerCase()} `);
}

describe_city('New yoRK', 'america');
describe_city('munich', 'germany');
describe_city('karachi');