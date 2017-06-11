var i = 0;
var images = [];

images[0] = "https://s-media-cache-ak0.pinimg.com/originals/29/55/0c/29550c25dcf3b3add01d7d708e51d6f7.jpg";
images[1] = "https://s-media-cache-ak0.pinimg.com/originals/07/04/ef/0704ef49843eeb943295f02b03fb735d.jpg";;
images[2] = "https://s-media-cache-ak0.pinimg.com/originals/46/16/b4/4616b481652f8e57faa9301ee2241d7a.jpg";

function slideshow() {
  document.getElementById('slider').src = images[i];

  if (i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }
  var lapse = setTimeout(slideshow, 10000);
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

  if (i > 0 && i < 3) {
    i++;
    console.log("going forward");
  } else {
    i = 0;
    console.log("back at zero");
  }
}

window.onload = slideshow;
