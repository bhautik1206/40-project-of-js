const colors=["#000080", "#00008B", "#0000CD", "#0000FF",
"#006400", "#008000", "#008080", "#008B8B","#00BFFF",
"#00CED1","#00FA9A","#00FF00","#00FF7F","#00FFFF",
"#00FFFF","#191970","#1E90FF","#20B2AA","#228B22",
"#2E8B57","#2F4F4F","#2F4F4F","#32CD32","#3CB371",
"#40E0D0","#4169E1","#4682B4","#483D8B","#48D1CC",
"#4B0082","#556B2F","#5F9EA0","#6495ED","#663399",
"#66CDAA","#696969","#696969","#6A5ACD","#6B8E23",
"#708090","#708090","#778899","#778899","#7B68EE",
"#7CFC00","#7FFF00","#7FFFD4","#800000","#800080",
"#808000","#808080","#808080","#87CEEB","#87CEFA",
"#8A2BE2","#8B0000","#8B008B","#8B4513","#8FBC8F",
"#90EE90","#9370DB","#9400D3","#98FB98","#9932CC",
"#9ACD32","#A0522D","#A52A2A","#A9A9A9","#A9A9A9",
"#ADD8E6","#ADFF2F","#AFEEEE","#B0C4DE","#B0E0E6",
"#B22222","#B8860B","#BA55D3","#BC8F8F","#BDB76B",
"#C0C0C0","#C71585","#CD5C5C","#CD853F","#D2691E",
"#D2B48C","#D3D3D3","#D3D3D3","#D8BFD8","#DA70D6",
"#FFF0F5","#FFF5EE","#FFF8DC","#FFFACD","#FFFAF0"
,"#FFFAFA","#FFFF00","#FFFFE0","#FFFFF0","#FFFFFF"];
const btn=document.getElementById("btn");
const color=document.querySelector(".color");
// // btn.addEventListener("click",myfunction);
btn.addEventListener("click",()=>{
      const randomNumber = getRandomNumber();
      document.body.style.backgroundColor = colors[randomNumber];
      color.textContent = colors[randomNumber];
    });


  function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
  }

//   const btn = document.getElementById("btn");
// const color = document.querySelector(".color");

// btn.addEventListener("click",  () => {
//   const randomNumber = getRandomNumber();
//   document.body.style.backgroundColor = colors[randomNumber];
//   color.textContent = colors[randomNumber];
// });
// f
// unction getRandomNumber() {
//   return Math.floor(Math.random() * colors.length);
// }