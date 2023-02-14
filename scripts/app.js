var element = document.querySelector("h1");
var startString = element.innerHTML;
console.log(startString);
var currentString = "";

function addToCurrentString() {
  if (currentString.length <= startString.length) {
    element.innerHTML = currentString;
    currentString += startString[currentString.length];
    document.getElementById("name").style.display = "block";

    setTimeout(addToCurrentString, 200);
  }

  console.log(currentString);
}

setTimeout(addToCurrentString, 300);
