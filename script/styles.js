var modal = document.getElementById("myModal");

// Get the button that opens the modal

function modal_disp(i){
    mod = document.getElementById("modalheader");
    modbody = document.getElementById("modalbody");
    headstr = "ACCN="+tripdata[i].accn + "   , Triplet ID="+tripdata[i].compid;
    mod.innerHTML=headstr;
    mainstr = "Residue Names="+tripdata[i].resname1+"-"+tripdata[i].resname2+"-"+tripdata[i].resname3+",  <br>";
    mainstr =  mainstr + "mmCIF residue details ["+tripdata[i].chain1+":"+tripdata[i].resid1+tripdata[i].ins1+", ";
    mainstr =  mainstr + tripdata[i].chain2+":"+tripdata[i].resid2+tripdata[i].ins2+", ";
    mainstr =  mainstr + tripdata[i].chain3+":"+tripdata[i].resid3+tripdata[i].ins3+"]<br> ";
    mainstr =  mainstr + "Base pair Stability Value for " +tripdata[i].bpname1+  " is "+tripdata[i].eval12 +"<br>";
    mainstr =  mainstr + "Base pair Stability Value for " +tripdata[i].bpname23+ " is "+tripdata[i].eval23;
    modbody.innerHTML = mainstr;
    modal.style.display = "block";
}
//var querytab = document.getElementById("querytab");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

var linkstd = document.getElementById("linkstd");

// When the user clicks on the button, open the modal
/*querytab.onclick = function() {
  modal.style.display = "block";
}*/

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
