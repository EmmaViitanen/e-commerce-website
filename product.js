/* The following 23 lines of code
 ** was adapted from:
 ** https://www.tutorialspoint.com/how-to-show-images-with-a-click-in-javascript-using-html
 ** Accessed: 2023-12-02
 */

// let showImage = document.getElementById("show-image");
// let myImage = document.getElementById("my-image");
// showImage.addEventListener("click", () => {
//   myImage.classList.toggle("visible");
// });

// let showImage2 = document.getElementById("show-image2");
// let myImage2 = document.getElementById("my-image2");
// showImage2.addEventListener("click", () => {
//   myImage2.classList.toggle("visible");
// });

// let showImage3 = document.getElementById("show-image3");
// let myImage3 = document.getElementById("my-image3");
// showImage3.addEventListener("click", () => {
//   myImage3.classList.toggle("visible");
// });

// let showImage4 = document.getElementById("show-image4");
// let myImage4 = document.getElementById("my-image4");
// showImage4.addEventListener("click", () => {
//   myImage4.classList.toggle("visible");
// });

// Fetch references in html
// JAG TOG BORT DOMCONENTLOADED SOM VI PRATADE OM. FUNGERAR FÖR MIG UTAN.
const displayImg = document.querySelector("#sticky-img");
const slideImages = document.querySelectorAll(".slide img");

// function to swap the image with a smooth transition
function swapImage() {
  const imgSource = this.getAttribute("src");

  // fade image before swap
  // OPACITY 0 GÖR BILDEN MÖRK SÅ DEN FÖRSVINNER
  displayImg.style.transition = "opacity 0.3s ease";
  displayImg.style.opacity = 0;

  // delay the transition to make it smooth
  // MED SET-TIMEOUT KAN MAN FÖRDRÖJA ATT EN HÄNDELSE
  // https://www.w3schools.com/jsref/met_win_settimeout.asp
  setTimeout(() => {
    displayImg.setAttribute("src", imgSource);

    // display the new image after selected delay
    // ÄNDRA TILLBAKA OPACITY TILL I (SOM DEN ÄR I CSS-FILEN)
    // ANGE FÖRDRÖJNINGEN I TID (MILISECONDS..)
    displayImg.style.opacity = 1;
  }, 300);
}

// Loop through the selection of images and use the function to display
// KÄLLA TILL FOREACH NEDAN. FOREACH ÄR BRA NÄR FLERA ITEMS SKALL HÄMTAS UTAN ATT MIDIFIERAS
// https://www.w3schools.com/jsref/jsref_foreach.asp
slideImages.forEach((img) => {
  img.addEventListener("click", swapImage);
});
