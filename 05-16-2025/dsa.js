let data = [9,45,23,4,54,23,5,56,34,34,23]
// for(let x = 0; x<data.length; x++) {
//     document.write(`Array ${x} : ${data[x]}</br>`);
// }


// let x = 4;
// document.write(`Index ${x} :  ${data[x]}`);


function clickMe() {
    let el = document.getElementById("element").value;
    if(el<0) {
        alert("please input positive value");
    } else if(el<data.length && typeof parseInt(el) === "number") {
        alert(data[el]);
    } else {
        alert("please enter a valid input");
    }
}