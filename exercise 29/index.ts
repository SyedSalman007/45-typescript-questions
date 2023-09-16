export {};

let favorite_fruits:string[] = ['banana', 'apple', 'grapes'];

let toFind:string = "banana";
let index = favorite_fruits.indexOf(toFind)

if(index != -1)
{
    console.log(`You really like ${toFind}.\n`)
}
else
{
    console.log(`You don't like ${toFind}.\n`)
}

toFind = "apple";
index = favorite_fruits.indexOf(toFind)

if(index != -1)
{
    console.log(`You really like ${toFind}.\n`)
}
else
{
    console.log(`You don't like ${toFind}.\n`)
}

toFind = "kiwi";
index = favorite_fruits.indexOf(toFind)

if(index != -1)
{
    console.log(`You really like ${toFind}.\n`)
}
else
{
    console.log(`You don't like ${toFind}.\n`)
}

toFind = "mango";
index = favorite_fruits.indexOf(toFind)

if(index != -1)
{
    console.log(`You really like ${toFind}.\n`)
}
else
{
    console.log(`You don't like ${toFind}.\n`)
}

toFind = "grapes";
index = favorite_fruits.indexOf(toFind)

if(index != -1)
{
    console.log(`You really like ${toFind}.\n`)
}
else
{
    console.log(`You don't like ${toFind}.\n`)
}