let members = [
    {
        name:"ozan",
        age:22,
        occupation:"developer"
    },
    {
        name:"nida",
        age:22,
        occupation:"student"
    },
    {
        name:"yiğit",
        age:7,
        occupation:"student"
    },
    {
        name:"defne",
        age:7,
        occupation:"student"
    },
    {
        name:"Baransel",
        age:31,
        occupation:"developer"
    }
]

let children = members.filter((person)=>{
    if(person.age<18)
    return true;
});

console.log(children);
