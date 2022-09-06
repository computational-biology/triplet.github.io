var modal = document.getElementById("myModal");

// Get the button that opens the modal
var querytab = document.getElementById("querytab");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

var linkstd = document.getElementById("linkstd");

// When the user clicks on the button, open the modal
querytab.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

linkstd.onclick = function() {
  modal.style.display = "none";
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
} 
