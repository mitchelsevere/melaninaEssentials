$(document).ready(function() { // When the document is ready, run this function

/************ Slideshow Script ***********/

    var i = 1; // After the background image loads the image[1] will begin the interval
    var images = []; // Initializing my empty array
    var image = $("#slider"); // Setting the jQuery call of the slider id to the variable image

    // Assigning the image arrays to the image path
    images[0] = "images/slide1.jpg";
    images[1] = "images/slide2.jpg";
    images[2] = "images/slide3.jpg";
    images[3] = "images/slide4.jpg";

    /* Using jQuery and an anonymous setInterval function to fade out every 500 ms
     and to increment the background image by 1 to the next array item. If i is greater or equal to
     the image length, reset i to zero */

    setInterval(function(){
    image.fadeOut(500, function(){
      image.css("background-image", "url(" + images[i++] + ")");
      image.fadeIn(500);
    }); // End of fadeOut function
    if(i >= images.length) {
      i = 0;
    } // End of if statement
  }, 6000); // End of setInterval


/************ My version of Modal Window Script ***********/

  $(".products").click(function(){ // Calling the parent element
          $(this).next().slideDown("slow"); // Targeting the next selector (not nested)
      });
  $(".close").click(function(){ // Calling the close selector
          $(this).parent('.description').slideUp("slow"); // targeting to slide up on the parent
      });
}); // End of document ready function







/* OLD - Pure Javascript slider with no animation effects */
// var i = 0;
// var images = [];
//
// images[0] = "images/slide1.jpg";
// images[1] = "images/slide2.jpg";
// images[2] = "images/slide3.jpg";
//
// function slideshow() {
//   document.getElementById('slider').src = images[i];
//
//   if (i < images.length - 1) {
//     i++;
//   } else {
//     i = 0;
//   }
//   var lapse = setTimeout(slideshow, 5000);
// }
//
// function goBack() {
//   document.getElementById('slider').src = images[i];
//
//   if (i == 0) {
//     i = images.length - 1;
//     console.log("last image");
//   } else {
//     i--;
//     console.log("going backwards");
//   }
// }
//
// function goForward() {
//   document.getElementById('slider').src = images[i];
//
//   if (i < images.length - 1) {
//     i++;
//     console.log("going forward");
//   } else {
//     i = 0;
//     console.log("back at zero");
//   }
// }
//
// window.onload = slideshow;
