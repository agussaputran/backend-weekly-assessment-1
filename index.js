function getFullname(firstName, lastName, age){
    //process
    let fullName = `${firstName} ${lastName}`;
    let getFullname = `Hi! My name is ${fullName}. I am ${age} years old.`
    // nilai balikan
    return getFullname
}

// call the function
console.log(getFullname("Daniel", "Harianja", 22));