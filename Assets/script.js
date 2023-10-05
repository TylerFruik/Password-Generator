// * VARIABLES
var generateBtn = document.getElementById('generate');
const buttons = document.querySelectorAll('.parameter-button');
var slider = document.querySelector(".slider");
var sliderValue = document.getElementById("slider-value");

// * FUNCTIONS
//updates slider value number
function updateSliderValue() {
  sliderValue.textContent = slider.value;
}

// ! Eventually, have the sliderValue number move along with the slider thumb
// function updateSliderValuePosition() {}


function setCriteria() { // • PASSWORD SETUP METHOD function setCriteria()
//set password length
//set parameters for generation (upper/lowercase, numbers, symbols)
//if statement if no parameters are set that repeats the process
}

function generatePassword() {

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
  });
});
// Runs if slider is adjusted
slider.addEventListener("input", updateSliderValue);

// ! Generate Password button
// if (generateBtn.disabled == true) {
//   generateBtn.addEventListener("click", writePassword);
//   console.log('true')
// } else if (generateBtn.disabled == false) {
//   console.log('false')
// }

// MAIN
updateSliderValue();

// TODO
// • Generate Password button togglegit 
