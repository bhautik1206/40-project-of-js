var indexValue = 0;
function slideShow(){
  setTimeout(slideShow, 2000);
  var x;
  const img = document.getElementsByClassName("myslide");
  for(x = 0; x < img.length; x++){
    img[x].style.display = "none";
  }
  indexValue++;
  if(indexValue > img.length){indexValue = 1}
  img[indexValue -1].style.display = "block";
}
slideShow();