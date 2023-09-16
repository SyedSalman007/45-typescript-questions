export {}

function show_magician(magician_name:string[])
{
    for(let i = 0; i < magician_name.length; i++)
    {
        console.log(magician_name[i].slice(0,1).toUpperCase() + magician_name[i].slice(1, magician_name[i].length).toLowerCase());
    }
}

let name: string[] = ["saLman", "ali", "joHN", "saM", "mAX"]

show_magician(name);