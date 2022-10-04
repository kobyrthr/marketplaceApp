interface Person {
    name:string,
    age:number,
    email?:string
}


function greetPerson(person:Person):string{
    return `Hello ${person.name}`
}

const p1:Person ={
    name:"John",
    age:30
}

console.log(greetPerson(p1))