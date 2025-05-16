const person = {
    name: "john",
    age: 30,
    city: "New york",
    greet: function() {return 30}
}

person.greet = person.greet.toString();
const farid = JSON.stringify(person);

document.getElementById("demo").innerHTML = farid;

