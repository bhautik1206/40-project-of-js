var weigthinp=document.querySelector(".weight");
var heigthinp=document.querySelector(".height");
var calculate=document.querySelector(".btn");
var result=document.querySelector(".result");
var view=document.querySelector(".View");
var BMI,height,weight;
// var BMI;
calculate.addEventListener("click", ()=>{
    weight=weigthinp.value;
    height=heigthinp.value;
    BMI=(weight/(height**2))*10000;
    result.innerText=BMI.toFixed(2);
    if(BMI<18.5){
        view.innerText="underweight";
    }
    else if(BMI=>18.5 && BMI<=  24.9){
        view.innerText="Normal weight";
    }
    else if(BMI=>25.0 && BMI<=29.9){
        view.innerText="Pre-obesity";
    }
    else if(BMI=>30.0 && BMI<=34.9){
        view.innerText="Obesity class I";
    }
    else if(BMI=>35 && BMI<=39.9){
        view.innerText="Obesity class II";
    }
    else if(BMI>40.0){
        view.innerText="Obesity class III";
    }
    else{
        view.innerText="You put zero in weight of height"
    }
});