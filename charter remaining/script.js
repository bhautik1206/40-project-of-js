const textareaEl=document.getElementById("textarea");
const totalcountEl=document.getElementById("total-count");
const remaningEl=document.getElementById("remaning");
// console.log(textareaEl.value);
textareaEl.addEventListener("keyup",()=>{
    updateCounter();
});
function updateCounter(){
    totalcountEl.innerText=textareaEl.value.length;
    remaningEl.innerText=textareaEl.getAttribute("maxLength") - textareaEl.value.length;
}