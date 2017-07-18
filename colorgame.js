var numSquares = 6;
var colors = generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyButton = document.querySelector("#easy");
var hardButton = document.querySelector("#hard");

resetButton.addEventListener("click",function(){
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";

    colors = generateRandomColors(numSquares);

    pickedColor = pickColor();

    colorDisplay.textContent = pickedColor;

    for(var i=0; i<squares.length; i++){
      squares[i].style.background= colors[i];
    }
    h1.style.background = "steelblue";
});

easyButton.addEventListener("click",function(){
    numSquares = 3;
    easyButton.classList.add("selected");
    hardButton.classList.remove("selected");
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i=0; i<squares.length; i++){
      if(colors[i]){squares[i].style.background= colors[i];
      }
      else {
        squares[i].style.display = "none";
      }

    }
    h1.style.background = "steelblue";
});






  hardButton.addEventListener("click",function(){
    numSquares = 6;
    hardButton.classList.add("selected");
    easyButton.classList.remove("selected");
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i=0; i<squares.length; i++){
       squares[i].style.background= colors[i];
       squares[i].style.display = "block";
     }
     h1.style.background = "steelblue";
  });

colorDisplay.textContent = pickedColor;

for(var i=0 ;i<squares.length;i++) {
  //add initial colors to squares
  squares[i].style.background = colors[i];

  //add click listeners to squares
  squares[i].addEventListener("click",function(){
    //grab color of clicked squares
    var clickedColor = this.style.background;
    //compare color to pickedColor
    if(clickedColor === pickedColor) {
        messageDisplay.textContent= "Correct!";
        resetButton.textContent = "Play Again?";
        changeColors(pickedColor);
        h1.style.background = clickedColor;
    }
    else {
      this.style.background = "#232323";
      messageDisplay.textContent= "Try Again";
    }
  });
}

function changeColors(color) {
  //loop through all squares
  for(var i=0;i<squares.length;i++){
    //change each color to match given color
    squares[i].style.background = color;
  }
}

function pickColor(){
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  //make an array
  var arr = []
  //add num random colors to array
  for(var i=0;i<num;i++){
        arr.push(randomColor());
  }
  return arr;
}

function randomColor() {
  //pick a "red" from 0-255
  var r = Math.floor(Math.random() * 256);
  //pick a "green" from 0-255
  var g = Math.floor(Math.random() * 256);
  //pick a "blue" from 0-255
  var b = Math.floor(Math.random() * 256);
  // add to "rgb(r, g , b)" format
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
