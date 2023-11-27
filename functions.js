document.getElementById("card").addEventListener("click", cardFunction);

function cardFunction() {
  var x = document.getElementById("card-info");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

// document.getElementById("menu").addEventListener("click", menuFunction);

function menuFunction() {
  var x = document.getElementById("hamburger-menu");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function swapOverflow() {
  var x = document.getElementById("hamburger-menu2").innerHTML;
  document.getElementById("cat-but").innerHTML = x;
}
