$("#button1").hide();
$("#button2").hide();
$("#button3").hide();
$("#button4").hide();
$("#restart").hide();
$("input").hide();
$("#submit").hide();
$("ol").hide();
$("#nobu").hide();
$("#theHenry").hide();
$("#theFrenchRoom").hide();
$("#trueFoodKitchen").hide();
$("#cheesecakeFactory").hide();
$("#pfChangs").hide();
$("#oliveGarden").hide();
$("#shakeShack").hide();
$("#paneraBread").hide();
$("#pandaExpress").hide();
$("#cicis").hide();
$("#kingBuffet").hide();
$("#goldenCorral").hide();
$("#sonic").hide();
$("#tacoBell").hide();
$("#wendys").hide();
$("#jackInTheBox").hide();
$("#mcDonalds").hide();
$(".grid").hide();

$("#start").click (function(){
  $("h1").html("Question 1: Are you REALLY hungry?");
  $("#start").hide();
  $("#button1").fadeIn ();
  $("#button2").fadeIn ();
  $("p").hide();
  $(".slideshow-container").hide();
  $("#restart").fadeIn();
})

$("#button1").click (function(){
  $("h1").html("Question 2: Buffet or Fast Food?")
  $("#button1").hide();
  $("#button2").hide();
  $("#button3").fadeIn ();
  $("#button4").fadeIn ();
})

$("#button2").click (function(){
  $("h1").html ("Question 2: What's your budget?")
  $("#button1").hide();
  $("#button2").hide();
  $("input").fadeIn();
  $("#submit").fadeIn();

})

$("#button3").click (function(){
  $("h1").html("Your Result:");
  $("#button3").hide();
  $("#button4").hide();
  $("#buffet").fadeIn();
  $("#cicis").fadeIn();
  $("#kingBuffet").fadeIn();
  $("#goldenCorral").fadeIn();
})

$("#button4").click (function(){
  $("h1").html("Your Result:");
  $("#button3").hide();
  $("#button4").hide();
  $("#fastFood").fadeIn();
  $("#sonic").fadeIn();
  $("#paneraBread").fadeIn();
  $("#pandaExpress").fadeIn();
  $("#tacoBell").fadeIn();
  $("#wendys").fadeIn();
  $("#jackInTheBox").fadeIn();
  $("#mcDonalds").fadeIn();
})

 function refreshPage (){
   window.location.reload();
 }

 var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
}

  $("#submit").click (function(){ 
     var budget = $("input").val()
        if (budget < 50) {
    $("h1").html("Your Result:")
    $("input").hide();
    $("#submit").hide();
    $("#under50").fadeIn();
    $("#trueFoodKitchen").fadeIn();
    $("#cheesecakeFactory").fadeIn();
    $("#pfChangs").fadeIn();
     }
        if (budget >= 50) {
    $("h1").html("Your Result:")
    $("input").hide();
    $("#submit").hide();
    $("#over50").fadeIn();
    $("#nobu").fadeIn();
    $("#theHenry").fadeIn();
    $("#theFrenchRoom").fadeIn();
     }
  })







