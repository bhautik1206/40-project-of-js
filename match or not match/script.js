const btn1=document.getElementById("btn1");
const btn2=document.getElementById("btn2");
const btn3=document.getElementById("btn3");
const comon=document.getElementsByClassName("btn");
var text=document.getElementById("text");
function random(){
    return Math.floor(Math.random() * (3 - 1 + 1) + 1)
}
btn1.addEventListener('click',()=>{
    if(random()==1){
        text.innerHTML="match";
    }
    else{
        text.innerHTML="not match";
    }
    console.log(random());
});
btn2.addEventListener("click",()=>{
    if(random()==2){
        text.innerHTML="match";
    }
    else{
        text.innerHTML="not match";
    }
    console.log(random());
});
btn3.addEventListener("click",()=>{
    if(random()==3){
        text.innerHTML="match";
    }
    else{
        text.innerHTML="not match";
    }
    console.log(random());
})