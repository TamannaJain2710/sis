var slideIndex2 = 0;
showSlides2();

function showSlides2() {
  var b;
  var slides = document.getElementsByClassName("mySlides2");
  var dots = document.getElementsByClassName("dot");
  for (b = 0; b < slides.length; b++) {
    slides[b].style.display = "none";  
  }
  slideIndex2++;
  if (slideIndex2 > slides.length) {slideIndex2 = 1}    
  for (b = 0; b < dots.length; b++) {
    dots[b].className = dots[b].className.replace(" active", "");
  }
  slides[slideIndex2-1].style.display = "block";  
  dots[slideIndex2-1].className += " active";
  setTimeout(showSlides2, 5000); // Change image every 5 seconds
}