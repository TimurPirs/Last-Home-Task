function myFunction() {
  // Get the snackbar DIV
  var x = document.getElementById("snackbar");

  // Add the "show" class to DIV
  x.className = "show";

  // After 3 seconds, remove the show class from DIV
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}



function zoomin(){
   var myImg = document.getElementById("more_image");
   myImg.style.transform = "scale(1.2)";
   myImg.style.transition="all 1s";
}
function zoomout(){
   var myImg = document.getElementById("more_image");
   myImg.style.transform = "scale(1.0)";
}
function zoomin1(){
   var myImg = document.getElementById("more_image1");
   myImg.style.transform = "scale(1.2)";
   myImg.style.transition="all 1s";
}
function zoomout1(){
   var myImg = document.getElementById("more_image1");
   myImg.style.transform = "scale(1.0)";
}
function zoomin2(){
   var myImg = document.getElementById("more_image2");
   myImg.style.transform = "scale(1.2)";
   myImg.style.transition="all 1s";
}
function zoomout2(){
   var myImg = document.getElementById("more_image2");
   myImg.style.transform = "scale(1.0)";
}
function zoomin3(){
   var myImg = document.getElementById("more_image3");
   myImg.style.transform = "scale(1.2)";
   myImg.style.transition="all 1s";
}
function zoomout3(){
   var myImg = document.getElementById("more_image3");
   myImg.style.transform = "scale(1.0)";
}
function zoomin4(){
   var myImg = document.getElementById("more_image4");
   myImg.style.transform = "scale(1.2)";
   myImg.style.transition="all 1s";
}
function zoomout4(){
   var myImg = document.getElementById("more_image4");
   myImg.style.transform = "scale(1.0)";
}
function zoomin5(){
   var myImg = document.getElementById("more_image5");
   myImg.style.transform = "scale(1.2)";
   myImg.style.transition="all 1s";
}
function zoomout5(){
   var myImg = document.getElementById("more_image5");
   myImg.style.transform = "scale(1.0)";

}
function zoomin6(){
   var myImg = document.getElementById("more_image6");
   myImg.style.transform = "scale(1.2)";
   myImg.style.transition="all 1s";
}
function zoomout6(){
   var myImg = document.getElementById("more_image6");
   myImg.style.transform = "scale(1.0)";
}
function zoomin7(){
   var myImg = document.getElementById("more_image7");
   myImg.style.transform = "scale(1.2)";
   myImg.style.transition="all 1s";
}
function zoomout7(){
   var myImg = document.getElementById("more_image7");
   myImg.style.transform = "scale(1.0)";
}


function soundClick() {
  var audio = new Audio(); // Создаём новый элемент Audio
  audio.src = 'audio/audio.mp3'; // Указываем путь к звуку "клика"
  audio.autoplay = true; // Автоматически запускаем
}




function clickk(){
   let modall=document.getElementById("myModall");
   modall.style.visibility = "visible";
   

}
function clickkk() {
   document.getElementById("myModall").style.visibility = "hidden";
}
function myFunctionnn() {
  document.getElementById("screenn").style.visibility = "hidden";
  document.getElementById("screennn").style.visibility = "hidden";
  document.getElementById("screennnn").style.visibility = "hidden";
}


