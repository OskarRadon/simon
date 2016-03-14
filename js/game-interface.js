
//NewGame constructor

function Game (colors, simonArray, userArray, gameLoss) {
  this.colors = ["red", "green", "blue", "yellow"];
  this.simonArray = [];
  this.userArray = [];
  this.gameLoss = false;
}

// generate new color and add it to simonArray

Game.prototype.generateColor() {
  simonArray.push(colors[Math.floor(Math.random() * 4)]);
  return simonArray;
}

// function to compare user and simonArray

Game.prototype.compareArrays() {
  if userArray === simonArray {
    generateColor();
  } else {
    gameLoss = true;
  }
}
