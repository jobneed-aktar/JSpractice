// const btn = document.querySelectorAll("button")[0];
// const list__items = document.getElementById("list__item");



// btn.addEventListener("click",addItem);
// function addItem() {
//     const inputValue = document.getElementById("input__item");
//     let createElement = document.createElement("li");
//     createElement.textContent = inputValue.value;
//     list__items.appendChild(createElement);
//     inputValue.value =" ";
// }



// // step 1 select button tag
// const btn = document.querySelectorAll("button")[0];

// // step 2 add eventlistener with button
// btn.addEventListener("click",removeFunc)

// // step 3 event function
// function removeFunc() {
//     const items = document.getElementById("items");
//     items.remove(items);
// }





// input child items
// const input = document.getElementById("input");
// const output = document.getElementById("output");

// input.addEventListener("keypress",()=> {
//     output.innerText = input.value;
// });


// form event listener
// const form = document.getElementById("form");
// form.addEventListener("submit",(e)=>{
//     e.preventDefault();
// });


// Focus event listener
// const input = document.getElementById("myInput");
// const msg = document.getElementById("message");
// input.addEventListener("focus",()=>{
//     msg.innerText = "You have focused on input box";
//     msg.style.color = "green";
// });



// Bluer event lister
// const input = document.getElementById("input");
// const msg = document.getElementById("message");
// input.addEventListener("blur",()=>{
//     if(input.value.trim() === ""){
//         msg.innerText = "Please enter a email address!";
//     } else {
//         msg.innerText = input.value;
//     }
// });


// select event listener
// const select = document.getElementById("select");
// const msg = document.getElementById("message");

// select.addEventListener("change",()=>{
//     msg.innerText = select.value;
//     msg.style.color = "forestGreen";
// });


// input event listener
// const input = document.getElementById("input");
// const msg = document.getElementById("message");
// input.addEventListener("input",()=>{
//     msg.innerText = input.value;
//     msg.style.color = "forestGreen";
// });


// const btn = document.getElementById("btn");
// btn.addEventListener("click",(event)=>{
//     console.log(event.target);
// });