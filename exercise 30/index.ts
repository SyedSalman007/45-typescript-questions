export {};

let users:string[] = ['salman', 'ali', 'admin', 'john', 'eric'];

for(let i = 0; i < users.length; i++)
{
    if(users[i] === "admin")
    {
        console.log("Hello admin, would you like to see a status report.\n");
    }
    else
    {
        console.log(`Hello ${users[i]}, thank you for logging in again.\n`)
    }
}