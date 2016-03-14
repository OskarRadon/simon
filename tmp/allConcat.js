var simon = require('./../js/game-interface.js').simon;


// function to push user input to userArray


//NewGame constructor

function Game (colors, simonArray, userArray, gameLoss) {
  this.colors = ["red", "green", "blue", "yellow"];
  this.simonArray = [];
  this.userArray = [];
  this.gameLoss = false;
}

// generate new color and add it to simonArray

Game.prototype.generateColor = function() {
  simonArray.push(colors[Math.floor(Math.random() * 4)]);
  return simonArray;
}

// function to compare user and simonArray

Game.prototype.compareArrays = function() {
  if (this.userArray === this.simonArray) {
    this.generateColor();
  } else {
    this.gameLoss = true;
  }
}
