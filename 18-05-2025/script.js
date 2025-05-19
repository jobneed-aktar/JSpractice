const person = {
    fullName : "Google corporation",
    address : "California, USA",
    age : 45
}

const person2 = person;

person2.fullName = ("Microsoft corporation");
console.log(person);
console.log(person2);