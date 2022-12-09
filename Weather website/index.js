var inputval=document.querySelector("#cityinput");
var btn=document.querySelector("#submit");
var city=document.querySelector("#cityoutput");
var descript=document.querySelector("#description");
var temp=document.querySelector("#temp");
var wind=document.querySelector("#wind");

apik="8ab0e6e15efdd542d3607346e5dfbbd5";

function convertion(val)
{
    return (val-273).toFixed(2)
}

btn.addEventListener('click',function()
{
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputval.value+'&APPID='+apik)
    // fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputval.value+'&appid='+apik)
    .then(res => res.json())


  .then(data=>
    {
    var nameval=data['name'];
    var descript=data['weather'][0]['description']
    var tempature=data['main']['speed']
    var wndspd=data['wind']['speed']
    city.innerHTML=`Weather of <span>${nameval}<span>`
    temp.innerHTML=`Temperature:<span>${convertion(tempature)} c </span>`
    description.innerHTML=`sky condidtion :<span>${descript}<span>`
    wind.innerHTML=`Wind speed:<span>${wndspd} km/h <span>`

})  
.catch(err=>alert("you entered wrong city name"))
})

