const bgimg=document.getElementById("bg-img");
window.addEventListener("scroll",()=>{
    upadateImg();
})
function updateImg(){
    bgimg.style.opacity=1-window.pageYOffset/900;
    bgimg.style.backgroundSize=99-window.pageYOffset/12 +"%";
}