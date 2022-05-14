
function generateNewColor () {
  let randomColor = Math.floor(Math.random()*16777216).toString(16);
 document.body.style.backgroundColor = "#" + randomColor;
 document.getElementById("color").innerHTML = "#" + randomColor;
}
