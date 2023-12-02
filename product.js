/* The following 23 lines of code
 ** was adapted from:
 ** https://www.tutorialspoint.com/how-to-show-images-with-a-click-in-javascript-using-html
 ** Accessed: 2023-12-02
 */

let showImage = document.getElementById("show-image");
let myImage = document.getElementById("my-image");
showImage.addEventListener("click", () => {
  myImage.classList.toggle("visible");
});

let showImage2 = document.getElementById("show-image2");
let myImage2 = document.getElementById("my-image2");
showImage2.addEventListener("click", () => {
  myImage2.classList.toggle("visible");
});

let showImage3 = document.getElementById("show-image3");
let myImage3 = document.getElementById("my-image3");
showImage3.addEventListener("click", () => {
  myImage3.classList.toggle("visible");
});

let showImage4 = document.getElementById("show-image4");
let myImage4 = document.getElementById("my-image4");
showImage4.addEventListener("click", () => {
  myImage4.classList.toggle("visible");
});
