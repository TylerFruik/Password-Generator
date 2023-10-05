// * VARIABLES
var generateBtn = document.getElementById('generate');
const buttons = document.querySelectorAll('.parameter-button');
var slider = document.querySelector('.slider');
var sliderValue = document.getElementById('slider-value');
var btnUpper = false;
var btnLower = false;
var btnNumber = false;
var btnSymbol = false;
const arrayUpper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const arrayLower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm','n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const arrayNumber = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const arraySymbol = [  '!', '"', '#', '$', '%', '&', '\'', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~'];

// * FUNCTIONS
//updates slider value number
function updateSliderValue() {
  sliderValue.textContent = slider.value;
}

// ! Eventually, have the sliderValue number move along with the slider thumb
// function updateSliderValuePosition() {}

function generatePasswordUnlock () {
  if (btnUpper || btnLower || btnNumber || btnSymbol) {
    generateBtn.style.cursor = 'pointer';
    generateBtn.style.filter = 'brightness(1)';
    console.log('Generate Password if works!')
  } else {
    generateBtn.style.cursor = 'not-allowed';
    generateBtn.style.filter = 'brightness(0.6)';
    console.log('Generate Password else works!')
  }
}

function generatePassword() {
  if (btnUpper) {
    var passwordGen = Math.floor(Math.random() * arrayUpper.length);
  }
  console.log("generatePassword was called!");
  return passwordGen;
}

// Write password to the #password input
function writePassword() {
  console.log("Clicking the button works!")
  var password = generatePassword();
  console.log(password);
  var passwordText = document.getElementById('password');
  passwordText.value = password;
}

// * LISTENERS
// Runs if parameter button is clicked
buttons.forEach(button => {
  button.addEventListener('click', () => {
      button.classList.toggle('selected');
      if (button.id == 'uppercase') {
        btnUpper = !btnUpper;
      } else if (button.id == 'lowercase') {
        btnLower = !btnLower;
      } else if (button.id == 'number') {
        btnNumber = !btnNumber;
      } else if (button.id == 'symbol') {
        btnSymbol = !btnSymbol;
      }
      console.log("Paras works!")
      generatePasswordUnlock();
  });
});

// Generate Password button
// TODO prints on startup
generateBtn.addEventListener('click', console.log('click'))

// Runs if slider is adjusted
slider.addEventListener('input', updateSliderValue);
