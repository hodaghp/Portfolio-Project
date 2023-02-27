var element = document.querySelector("#name");
var startString = element.innerHTML;
var currentString = "";

function addToCurrentString() {
  if (currentString.length <= startString.length) {
    element.innerHTML = currentString;
    currentString += startString[currentString.length];
    document.getElementById("name").style.display = "block";

    setTimeout(addToCurrentString, 200);
  }

  // console.log(currentString);
}

setTimeout(addToCurrentString, 300);

function toggleTheme() {
  if (theme === "light") {
    theme = "dark";
    document.querySelector("body").classList.add("dark");
  } else {
    theme = "light";
    document.querySelector("body").classList.remove("dark");
  }
}

let theme = "dark";
let themeButton = document.querySelector("#change-theme-button");
themeButton.addEventListener("click", toggleTheme);
