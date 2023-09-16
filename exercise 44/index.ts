export {}

function make_sandwich(...ingredient:string[])
{
    if(ingredient.length == 0)
    {
        console.log("\nYou ordered an empty sandwich. Please add some items.\n");
    }
    else
    {
        console.log("\nBelow is the list of ingredients I want in my sandwich:\n")
        for(let i = 0; i < ingredient.length; i++)
        {
            console.log(`${i+1}. ${ingredient[i]}`);
        }
    }
}

make_sandwich("Turkey", "Lettuce", "Tomato", "Mayo")
make_sandwich("Ham", "Swiss cheese", "Mustard")
make_sandwich()