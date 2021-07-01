const images = document.querySelectorAll("#galerie img");
const length = images.length - 1;
let imgActive = 0;
let isActivated = false;
let playGalery;

// masquer les photos sauf la 1ere
for (let i = 1; i < images.length; i++) {
  images[i].classList.add("hidden");
}

function nextImage() {
  images[imgActive].classList.add("hidden");
  if (imgActive == length) {
    imgActive = -1;
  }
  imgActive++;
  images[imgActive].classList.remove("hidden");
  let lengthDisplay = "Image numéro " + (imgActive + 1);
  document.getElementById("text").innerText = lengthDisplay;
}

function previousImage() {
  images[imgActive].classList.add("hidden");
  if (imgActive == 0) {
    imgActive = length + 1;
  }
  imgActive--;
  let lengthDisplay = "Image numéro " + (imgActive + 1);
  images[imgActive].classList.remove("hidden");
  document.getElementById("text").innerText = lengthDisplay;
}

function play() {
  if (isActivated == false) {
    console.log(isActivated);
    isActivated = true;
    playGalery = setInterval(function () {
      nextImage();
    }, 1000);
  } else {
    return;
  }
}

function stop() {
  isActivated = false;
  clearInterval(playGalery);
}

// Clic sur bouton suivant
document.querySelector("#next").addEventListener("click", function () {
  nextImage();
});

// Clic sur bouton précédant
document.querySelector("#prev").addEventListener("click", function () {
  previousImage();
});

document.querySelector("#play").addEventListener("click", function () {
  play();
});

document.querySelector("#pause").addEventListener("click", function () {
  stop();
});

// gestion touches clavier
window.addEventListener("keydown", function (e) {
  if (e.key == "ArrowRight") nextImage();
  else if (e.key == "ArrowLeft") previousImage();
});
