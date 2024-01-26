let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/fractal.gif") {
    myImage.setAttribute("src", "images/koch_fractal.jpeg");
  } else {
    myImage.setAttribute("src", "images/fractal.gif");
  }
};

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `${myName}`;
    }
  }

myButton.onclick = () => {
setUserName();
};