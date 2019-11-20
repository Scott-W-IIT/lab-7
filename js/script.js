function init(){
  document.getElementById("entrybutton").addEventListener("click", myalert);
  document.getElementById("entrybutton").addEventListener("click", output);
} 
function myalert(){
  alert("Scott's Website: " + document.getElementById("entryinput").value);
}
function output(){
  document.getElementById("textoutput").innerHTML = document.getElementById("entryinput").value;
}

window.addEventListener('load', init);