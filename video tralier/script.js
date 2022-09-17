const btnEl=document.querySelector("#watch");
const trailerEL=document.querySelector(".trailer");
const closeEl=document.querySelector(".close-icon");
const videoEl=document.querySelector("video");
btnEl.addEventListener("click",()=>{
    trailerEL.classList.remove("active");
})
closeEl.addEventListener("click",()=>{
    trailerEL.classList.add("active");
    videoEl.pause();
    videoEl.currentTime=0;
})


// const btnEl=document.querySelector("#watch");
// const closeiconEl=document.querySelector(".close-icon");
// const trailerEl=document.querySelector(".main");
// const videoEl=document.querySelector("video");
// btnEl.addEventListener("click",()=>{
//     trailerEl.classList.remove("active");
// });
// closeiconEl.addEventListener("click",()=>{
//     trailerEl.classList.add("active");
//     videoEl.pause();
//     videoEl.currentTime=0;
// });