const popup = document.getElementsByClassName("popup-menu");
const szczala = document.getElementsByClassName("szczala");
const championImgs = document.getElementsByClassName("champion-img");

const animations = ["rotateX", "rotateY", "rotateZ"];

let random = null;
let previousRandom = null;

let imgRand = null;

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

async function triggerAnimation() {
  if (popup[0].style.display == "block") {
    await slideOut();
  } else {
    await slideIn();
  }
}

/*

mobile version img changing algorithm - function champChamge()

loop : 

get random (use giveRandom so the numebr won't be same as previous) img and show it on screen with animation => {
  get random number between 0 and 3
  display block the img based on the number
} - animation should take smth about 2 seconds

wait 3 seconds => {
  time sleep for 3 seconds
}

take off the image with animation => {
  give aniamtion name so the img can fade out
  give the img display none
} - animation should take smth about 2 seconds

rename the animation for the next iteration => {
  reset the animation name for the img
}

---------------------------------

needed variables:

the variable that holds the random number 

the list of imgs

*/

changeChamp();

function changeChamp() {
  return new Promise((resolve) => {
    imgRand = giveRandom(4);
    // console.log(imgRand);
    championImgs[imgRand].style.display = "block";
    setTimeout(() => {
      championImgs[imgRand].style.animationName = "hideChamp";
      setTimeout(() => {
        championImgs[imgRand].style.display = "none";
        championImgs[imgRand].style.animationName = "showChamp";
        // console.log(imgRand, " has ", championImgs[imgRand].style.display);
        resolve();
      }, 2000);
    }, 6000);
  });
}

setInterval(changeChamp, 8050);
