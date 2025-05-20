const btn = document.getElementById("btn");
const bodyElement = document.body;
const colors = ["green","red","orange","tomato","violet","dodgerblue"];
btn.addEventListener("click",()=>{
    const randomNumber = Math.round((Math.random()*10) % colors.length);
    bodyElement.style.backgroundColor = colors[randomNumber];
});
