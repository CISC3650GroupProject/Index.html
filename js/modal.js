//Basement
// Open the Modal
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

// Close the Modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) 
  {
    slideIndex = 1;
  }
  if (n < 1) 
  {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) 
  {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) 
  {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

//First Floor
// Open the Modal
function openModal2() {
  document.getElementById("myModal2").style.display = "block";
}

// Close the Modal
function closeModal2() {
  document.getElementById("myModal2").style.display = "none";
}

showSlides2(slideIndex);

// Next/previous controls
function plusSlides2(n) {
  showSlides2(slideIndex += n);
}

// Thumbnail image controls
function currentSlide2(n) {
  showSlides2(slideIndex = n);
}

function showSlides2(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides2");
  var dots = document.getElementsByClassName("demo2");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}


//Second Floor
// Open the Modal
function openModal3() {
  document.getElementById("myModal3").style.display = "block";
}

// Close the Modal
function closeModal3() {
  document.getElementById("myModal3").style.display = "none";
}

showSlides3(slideIndex);

// Next/previous controls
function plusSlides3(n) {
  showSlides3(slideIndex += n);
}

// Thumbnail image controls
function currentSlide3(n) {
  showSlides3(slideIndex = n);
}

function showSlides3(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides3");
  var dots = document.getElementsByClassName("demo3");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

//Third Floor
// Open the Modal
function openModal4() {
  document.getElementById("myModal4").style.display = "block";
}

// Close the Modal
function closeModal4() {
  document.getElementById("myModal4").style.display = "none";
}

showSlides4(slideIndex);

// Next/previous controls
function plusSlides4(n) {
  showSlides4(slideIndex += n);
}

// Thumbnail image controls
function currentSlide4(n) {
  showSlides4(slideIndex = n);
}

function showSlides4(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides4");
  var dots = document.getElementsByClassName("demo4");
  var captionText = document.getElementById("caption");
  if (n > slides.length) 
  {
    slideIndex = 1
  }
  if (n < 1) 
  {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) 
  {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) 
  {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

//Fourth Floor
// Open the Modal
function openModal5() {
  document.getElementById("myModal5").style.display = "block";
}

// Close the Modal
function closeModal5() {
  document.getElementById("myModal5").style.display = "none";
}

showSlides5(slideIndex);

// Next/previous controls
function plusSlides5(n) {
  showSlides5(slideIndex += n);
}

// Thumbnail image controls
function currentSlide5(n) {
  showSlides5(slideIndex = n);
}

function showSlides5(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides5");
  var dots = document.getElementsByClassName("demo5");
  var captionText = document.getElementById("caption");
  if (n > slides.length) 
  {
    slideIndex = 1
  }
  if (n < 1) 
  {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) 
  {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) 
  {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}