const img = ["./img/img_1.jpg","./img/img_2.jpg","./img/img_3.jpg"];
const btn = document.querySelectorAll("button");
const previous = btn[0];
const next = btn[1];
const imgTag = document.querySelector("img");
count = 0;
next.addEventListener("click",()=>{
    count++;
    if(count>=img.length) {
        count = 0;
        imgTag.src = img[count];
    }else {
        imgTag.src = img[count];
    }
    
});
previous.addEventListener("click",()=>{
    count --;
    if(count<0){
        count = img.length -1;
        imgTag.src = img[count];
    } else{
        imgTag.src = img[count];
    }
})
