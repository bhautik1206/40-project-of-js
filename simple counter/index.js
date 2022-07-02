let counter=document.querySelector ("span");
const incbtn=document.getElementById("increse");
const decbtn=document.getElementById("Decrease");
const resetbtn=document.getElementById("Reset");
let counterstate=Number(counter.innerText);
incbtn.addEventListener("click",()=>{
    counter.innerText = counterstate += 1;
});
decbtn.addEventListener("click",()=>{
    counter.innerText=counterstate -=1;
});
resetbtn.addEventListener("click",()=>{
    counter.innerText=counterstate=0;
});
