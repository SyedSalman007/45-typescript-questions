export {};

let current_users:string[] = ['salman', 'ali', 'abid', 'taha', 'mustafa'];

let new_users:string[] = ['john', 'SALMAN', 'Eric','ABID', 'Sam'];

for(let i = 0; i < new_users.length; i++)
{
    let index:number = current_users.indexOf(new_users[i].toLowerCase());

    if(index == -1)
    {
        console.log("The username is available.\n");
    }
    else
    {
        console.log(`${new_users[i]} please use different username.\n`);
    }
}