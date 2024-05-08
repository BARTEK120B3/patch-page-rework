const popup = document.getElementsByClassName("popup-menu");
const szczala = document.getElementsByClassName("szczala");

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
