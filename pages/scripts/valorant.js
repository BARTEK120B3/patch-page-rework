const popup = document.getElementsByClassName("popup-menu");

function slideIn() {
  return new Promise((resolve) => {
    popup[0].style.animationName = "slideIn";
    popup[0].style.display = "block";
    console.log("nice");
    console.log(popup[0].style.animationName);
    console.log(popup[0].style.display);
    resolve();
  });
}

function slideOut() {
  return new Promise((resolve) => {
    popup[0].style.animationName = "slideOut";
    console.log("nice");
    console.log(popup[0].style.animationName);

    setTimeout(() => {}, 1000);
    // popup[0].style.display = "none";
    console.log(popup[0].style.display);
    resolve();
  });
}

async function triggerAnimation() {
  if (popup[0].style.display == "block") {
    await slideOut();
  } else {
    await slideIn();
  }
}
