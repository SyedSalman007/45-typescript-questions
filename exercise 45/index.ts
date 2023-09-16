export {}

interface Car 
{
    manufacturer: string;
    model: string;
    [key: string]: any; 
}

function createCar(manufacturer: string, model: string, ...options: Record<string, any>[]): Car 
{

    const car: Car = {
        manufacturer,
        model,
    };

    for (const option of options) 
    {
        for (const key in option) 
        {
            if (option.hasOwnProperty(key)) 
            {
                car[key] = option[key];
            }
        }
    }
    
        return car;
}
  
const myCar = createCar("Toyota", "Camry", { color: "Blue", year: 2023 });
console.log(myCar);
  