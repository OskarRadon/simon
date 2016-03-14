var colors = ["red", "green", "blue", "yellow"];

var simonArray = [];
var userArray = [];
var gameLoss = false;

function randomNumber() {
  return Math.floor(Math.random() * 4);
}

function generateColor() {
  simonArray.push(colors[randomNumber()]);
  return simonArray;
}

// function to push user input to userArray

// function to compare user and simonArray
function compareArrays() {
  if userArray === simonArray {
    generateColor();
  } else {
    gameLoss = true;
  }
}
