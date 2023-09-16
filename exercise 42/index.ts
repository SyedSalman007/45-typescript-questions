export {}

function show_magician(magician_name:string[])
{
    for(let i = 0; i < magician_name.length; i++)
    {
        console.log(magician_name[i]);
    }
}

function make_great(magician_name:string[])
{
    const new_list:string[] = [];

    for(let i = 0; i < magician_name.length; i++)
    {
        new_list.push(`Great ${magician_name[i].slice(0,1).toUpperCase()}${magician_name[i].slice(1,magician_name[i].length).toLowerCase()}`)
    }
    return new_list
}

let name: string[] = ["saLman", "ali", "joHN", "saM", "mAX"];

name = make_great(name);

show_magician(name);