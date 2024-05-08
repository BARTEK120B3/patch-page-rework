const popup = document.getElementsByClassName("popup-menu");
const szczala = document.getElementsByClassName("szczala");
const championImg = document.getElementsByClassName("champion-img");

const animations = ["rotateX", "rotateY", "rotateZ"];
const imgSrc = [
  "src/brim.jpg",
  "src/harbor.jpg",
  "src/iso.jpg",
  "src/viper.jpg",
];

let previousRandom = null;
let random = null;
function giveRandom(x) {
  random = getRandomInt(x);
  while (random === previousRandom) {
    random = getRandomInt(x);
  }
  // console.log("random:",random);
  // console.log("previousRandom:", previousRandom);
  previousRandom = random;
  return random;
}
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function slideIn() {
  return new Promise((resolve) => {
    popup[0].style.animationName = "slideIn";
    szczala[0].style.animationName = "rotateIn";
    popup[0].style.display = "block";
    resolve();
  });
}

function slideOut() {
  return new Promise((resolve) => {
    popup[0].style.animationName = "slideOut";
    szczala[0].style.animationName = "rotateOut";
    setTimeout(() => {
      popup[0].style.display = "none";
      resolve();
    }, 50);
  });
}

function changeChamp() {
  return new Promise((resolve) => {
    championImg[0].style.animationName = "hideChamp";
    setInterval(() => {
      championImg[0].src = imgSrc[giveRandom(4)];
      setInterval(()=>{
        championImg[0].style.animationName = "showChamp";
      },500)
      resolve();
    }, 3000);
  });
}

async function triggerAnimation() {
  if (popup[0].style.display == "block") {
    await slideOut();
  } else {
    await slideIn();
  }
}

// setInterval(changeChamp()[0], 3500);

changeChamp();
