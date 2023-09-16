export {};

function make_shirt(size:string, message:string)
{
    if(size.toLowerCase() === 'large' || size.toLowerCase() === 'medium')
    {
        return `For size ${size.toLowerCase()}. \n${message}`;
    }
    return `For size ${size.toLowerCase()}.\n${message}`;
}

console.log(make_shirt("LARGE", "If things do not go right take left:"));