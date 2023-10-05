// * VARIABLES
var generateBtn = document.getElementById('generate');
const buttons = document.querySelectorAll('.parameter-button');
var slider = document.querySelector(".slider");
var sliderValue = document.getElementById("slider-value");
var btnUpper = false;
var btnLower = false;
var btnNumber = false;
var btnSymbol = false;

// * FUNCTIONS
//updates slider value number
function updateSliderValue() {
  sliderValue.textContent = slider.value;
}

// ! Eventually, have the sliderValue number move along with the slider thumb
// function updateSliderValuePosition() {}


function setCriteria() { // • PASSWORD SETUP METHOD function setCriteria()
}

function generatePasswordUnlock () {
  if (btnUpper || btnLower || btnNumber || btnSymbol) {
    generateBtn.style.cursor = "pointer";
    console.log("27");
  } else {
    generateBtn.style.cursor = "not-allowed";
  }
}

function generatePassword(length) {
  //if statement that determines what parameters the password will be generated with
  //if statement that first adds at least one of the required characters
  //for loop set to requested password length
  //shuffle the array
  
  return test;
}

// Write password to the #password input
function writePassword() {
  //call setCriteria()
  var password = generatePassword();
  var passwordText = document.querySelector('password');
  passwordText.value = password;
}

// * LISTENERS
// Runs if parameter button is clicked
buttons.forEach(button => {
  button.addEventListener('click', () => {
      button.classList.toggle('selected');
      console.log(button);
      console.log(button.id);
      if (button.id == 'uppercase') {
        btnUpper = !btnUpper;
      } else if (button.id == 'lowercase') {
        btnLower = !btnLower;
      } else if (button.id == 'number') {
        btnNumber = !btnLower;
      } else if (button.id == 'symbol') {
        btnSymbol = !btnSymbol;
      }
      generatePasswordUnlock();
      console.log("54");
  });
});

// Runs if slider is adjusted
slider.addEventListener("input", updateSliderValue);


// * MAIN

// TODO
// • Generate Password button togglegit 
