var dayEl=document.getElementById("day");
var hourEl=document.getElementById("hour");
var minEl=document.getElementById("min");
var secEl=document.getElementById("second");
const newYearEl="1 Jan 2023";
function countdown(){
    const newyeardate=new Date(newYearEl);
    const currentDay=new Date();
    const totalSecondEL=(newyeardate-currentDay)/1000;

    const days=Math.floor(totalSecondEL/3600/24);
    const hours=Math.floor(totalSecondEL/3600)%24;
    const mins=Math.floor(totalSecondEL/60)%60;
    const second=Math.floor(totalSecondEL)%60;
    dayEl.innerHTML=days;
    hourEl.innerHTML=hours;
    minEl.innerHTML=mins;
    secEl.innerHTML=second;
}
function formalTime(time){
    return time < 10 ? `0${time}` :time;
}
countdown();
setInterval(countdown,1000);