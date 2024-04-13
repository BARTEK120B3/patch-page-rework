// const slides = document.getElementsByClassName("slide");

// slides[0].style.color = "blue";

// function time(ms) {
//   return new Promise((resolve) => {
//     setTimeout(() => {resolve()}, ms);
//   });
// }
// async function stopSlide() {
//   try {
//     for (let i = 0; i < 4; i++) {
//       slides[i].style.animationPlayState = "paused";
//       console.log(slides[i].style.animationPlayState);
//     }
//     await time(1000);
//     for (let i = 0; i < 4; i++) {
//       slides[i].style.animationPlayState = "running";
//       console.log(slides[i].style.animationPlayState);
//     }
//   } catch (error) {
//     console.log("smth went wrong xd",error);
//   }
//   finally {
//     console.log("im really suprised it's working");
//   }
// }

// setInterval(stopSlide,0);




// const slides = document.getElementsByClassName("slide");
// const slide1 = document.getElementsByClassName("s1");
// const timeForSlides = 1000;

// function time(ms) {
//   return new Promise((resolve) => {
//     setTimeout(() => {resolve()}, ms);
//   });
// }

// async function moveSlideOne(){
//   try{  
//   time(timeForSlides);
//   slide1[0].style.transform = "translate(125%, 108%)";
//   time(timeForSlides);
//   slide1[0].style.transform = "translate(0, 108%)";
//   time(timeForSlides);
//   slide1[0].style.transform = "translate(0, 0)";
//   }
//   catch(error){
//     console.log("smth went wrong xd",error);
//   }
// }

// // moveSlideOne();
// setTimeout(()=>{},1000)
// slide1[0].style.transform = "translate(125%, 108%)";
// setTimeout(() => {}, 1000);
// slide1[0].style.transform = "translate(0, 108%)";
// console.log(slide1[0].style.transform);

