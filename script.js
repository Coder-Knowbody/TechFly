function displayOn() {
  document.getElementById("nav-text-id").style.display = "block";
  document.getElementById("ham-button").style.display = "none";
  document.getElementById("close-button").style.display = "block";
}
function displayOff() {
  document.getElementById("nav-text-id").style.display = "none";
  document.getElementById("ham-button").style.display = "block";
  document.getElementById("close-button").style.display = "none";
}
function toggleDisplay() {
  document.getElementById("password").type = "text";
  document.getElementById("hidew").style.display = "block";
  document.getElementById("show").style.display = "none";
}
function hideDisplay() {
  document.getElementById("password").type = "password";
  document.getElementById("hidew").style.display = "none";
  document.getElementById("show").style.display = "block";
}