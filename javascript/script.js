$(document).ready(function() { // When the document is ready, run this function

/************ My version of Modal Window Script ***********/

  $(".products").click(function(){ // Calling the parent element
          $(this).next().fadeIn(100).slideDown("slow"); // Targeting the next selector (not nested)
      });
  $(".label").click(function(){ // Calling the parent element
          $(this).next("section").fadeIn(100).slideDown("slow"); // Targeting the next selector (not nested)
      });
  $(".close").click(function(){ // Calling the close selector
          $(this).parent(".description").fadeOut(100).slideUp("slow"); // targeting to slide up on the parent
      });
}); // End of document ready function

/* Pure Javascript slider */
var i = 0;
var images = [];
var slide = document.getElementById('slider');

images[0] = "images/slide1.jpg";
images[1] = "images/slide2.jpg";
images[2] = "images/slide3.jpg";
images[3] = "images/slide4.jpg";

function slideshow() {
  slide.style.backgroundImage = "url(" + images[i] + ")"; // Grabbing the slider element and assinging the background url to my image array

  if (i < images.length - 1) {
    i++;
    console.log('increment');
  }
  else {
    i = 0;
    console.log('reset');
  }
  var timer = setTimeout(slideshow, 5000);
}

/* Scroll Buttons */

// function goBack() {
//   slide.style.backgroundImage = "url(" + images[i] + ")";
//
//   if (i == 0) {
//     i = images.length - 1;
//     clearTimeout(timer);
//     console.log("last image");
//   } else {
//     i--;
//     clearTimeout(timer);
//     console.log("going backwards");
//   }
// }
//
// function goForward() {
//   slide.style.backgroundImage = "url(" + images[i] + ")";
//
//   if (i < images.length - 1) {
//     i++;
//     clearTimeout(timer);
//     console.log("going forward");
//   } else {
//     i = 0;
//     clearTimeout(timer);
//     console.log("back at zero");
//   }
// }


window.onload = slideshow;
