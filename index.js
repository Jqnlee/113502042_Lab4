let buttons = document.querySelectorAll(".drum");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    let buttonKey = this.innerHTML; 
    playSound(buttonKey); 
    addAnimation(buttonKey);
  });
}

document.addEventListener("keydown", function (event) {
  let keyPressed = event.key; 
  playSound(keyPressed); 
  addAnimation(keyPressed); 
});

function playSound(key) {
  if (key === "w") {
    new Audio("sounds/crash.mp3").play();
  } else if (key === "a") {
    new Audio("sounds/kick-bass.mp3").play();
  } else if (key === "s") {
    new Audio("sounds/snare.mp3").play();
  } else if (key === "d") {
    new Audio("sounds/tom-1.mp3").play();
  } else if (key === "j") {
    new Audio("sounds/tom-2.mp3").play();
  } else if (key === "k") {
    new Audio("sounds/tom-3.mp3").play();
  } else if (key === "l") {
    new Audio("sounds/tom-4.mp3").play();
  }
}

function addAnimation(key) {
  let activeButton = document.querySelector("." + key); 
  if (activeButton) { 
    activeButton.classList.add("pressed"); 
    setTimeout(function () {
      activeButton.classList.remove("pressed"); 
    }, 100);
  }
}