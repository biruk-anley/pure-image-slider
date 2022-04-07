let i = 0;
let images = [];
let time = 2000;

// at the first lets create an images list

images[0] = "/images/1.jpg";
images[1] = "/images/3.jpg";
images[2] = "/images/4.jpg";
images[3] = "/images/5.jpg";
images[4] = "/images/6.jpg";

// write a fuction that is changed via funcion

function changedImage() {
  document.slide.src = images[i];

  if (i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }

  setTimeout("changedImage()", time);
}

window.onload = changedImage;
