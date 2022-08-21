var numberofbutton=document.querySelector(".btn").length;
for(var j=0;j<numberofbutton;j++){
    document.querySelector(".btn")[j].addEventListener("click",function(){
        var btnstyle=this.innerHTML;
        sound(btnstyle);
    });
}
document.addEventListener("keypress",()=>{
    sound(event.key);
});
document.addEventListener("keyup",()=>{
    sound(event.key);
})
document.addEventListener("keydown",()=>{
    sound(event.key);
})
console.log("jsdfhaskjfnfkjalfnhdsjak");
function sound(key){
    switch(key){
        case "w":
            var sound1=new Audio("w-kgf.mp3")
            sound1.play();
            console.log("fuck you  1 ")
            break;
        case "a":
            var sound2=new Audio("a-vikram.mp3")
            sound2.play();
            break;
        case "s":
                var sound3=new Audio("s-master.mp3")
                sound3.play();
                break;
        case "d":
                    var sound4=new Audio("d-rolex.mp3")
                    sound4.play();
                    break;
        case "j":
            var sound5=new Audio("j-vedalam.mp3")
            sound5.play();
            break;
        case "k":
            var sound6=new Audio("k-once.mp3")
            sound6.play();
            break;
        default:
            console.log(key);
    }
}
