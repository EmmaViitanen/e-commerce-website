document.getElementById("card").addEventListener("click", cardFunction);

function cardFunction() {
  var x = document.getElementById("card-info");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function menuFunction() {
  var x = document.getElementById("hamburger-menu");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function on() {
  document.getElementById("overlay").style.display = "block";
}

function off() {
  document.getElementById("overlay").style.display = "none";
}
