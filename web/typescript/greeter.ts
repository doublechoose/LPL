function greeter(person:string){
    return "Hello, "+person;
}

let user = [0,1,2]

document.body.innerHTML = greeter(user);

//Argument of type 'number[]' is 
//not assignable to parameter of type 'string'