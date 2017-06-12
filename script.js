var i = 0;
var images = [];

images[0] = "images/slide1.jpg";
images[1] = "images/slide2.jpg";
images[2] = "images/slide3.jpg";

function slideshow() {
  document.getElementById('slider').src = images[i];

  if (i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }
  var lapse = setTimeout(slideshow, 5000);
}

function goBack() {
  document.getElementById('slider').src = images[i];

  if (i == 0) {
    i = images.length - 1;
    console.log("last image");
  } else {
    i--;
    console.log("going backwards");
  }
}

function goForward() {
  document.getElementById('slider').src = images[i];

  if (i < images.length - 1) {
    i++;
    console.log("going forward");
  } else {
    i = 0;
    console.log("back at zero");
  }
}

window.onload = slideshow;
