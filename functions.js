document.getElementById("card").addEventListener("click", cardFunction);

function cardFunction() {
  var x = document.getElementById("card-info");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
