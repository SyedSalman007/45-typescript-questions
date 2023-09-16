export {}

function make_shirt(size:string, message:string)
{
    return `For size ${size}.\n${message}`;
}

console.log(make_shirt('large', 'If things do not go right take left'));