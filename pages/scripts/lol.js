let state = -1;
const slides = document.getElementsByClassName("slide");
for (let i = 0; i < 3; i++) {
  slides[i].style.visibility = "hidden";
}
function pass()
{
  console.log("some function used me for passing empty function");
}
function getNext() {
  if (state == 2) {
    state = -1;
  }
  state++;
  console.log(state);
  return state;
}
function changeSlides() {
  
  setTimeout(pass,0)
  for (let i = 0; i < 3; i++)
  {
    slides[i].style.visibility = "hidden";
  }
  slides[getNext()].style.visibility = "visible";
  console.log("slide jus changed");
}
setTimeout(changeSlides,0);
setInterval(changeSlides, 5000);
