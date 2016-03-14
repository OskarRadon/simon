(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

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

},{}],2:[function(require,module,exports){
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

},{"./../js/game-interface.js":1}]},{},[2]);
