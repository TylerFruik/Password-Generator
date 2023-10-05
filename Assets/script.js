// * VARIABLES
var generateBtn = document.getElementById('generate');
const buttons = document.querySelectorAll('.parameter-button');
var slider = document.querySelector('.slider');
var sliderValue = document.getElementById('slider-value');
var passwordText = document.getElementById('password');
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
  } else {
    generateBtn.style.cursor = 'not-allowed';
    generateBtn.style.filter = 'brightness(0.6)';
  }
}

function generatePassword() {
  var passwordGen = '';
  var characterArray = [];
  if (btnUpper) {
    passwordGen = passwordGen + arrayUpper[Math.floor(Math.random() * arrayUpper.length)];
    characterArray = characterArray + arrayUpper;
  } 
  if (btnLower) {
    passwordGen = passwordGen + arrayLower[Math.floor(Math.random() * arrayLower.length)];
    characterArray = characterArray + arrayLower;
  }
  if (btnNumber) {
    passwordGen = passwordGen + arrayNumber[Math.floor(Math.random() * arrayNumber.length)];
    characterArray = characterArray + arrayNumber;
  }
  if (btnSymbol) {
    passwordGen = passwordGen + arraySymbol[Math.floor(Math.random() * arraySymbol.length)];
    characterArray = characterArray + arraySymbol;
  }
  for (i = 0; i < slider.value; i++) {
    passwordGen = passwordGen + characterArray[Math.floor(Math.random() * characterArray.length)]
  }

  return passwordGen;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  console.log(password);
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
      generatePasswordUnlock();
  });
});

// Generate Password button
// TODO disable the button unless parameters are set
generateBtn.addEventListener('click', () => {
  if (btnUpper || btnLower || btnNumber || btnSymbol) {
    writePassword();
  } else {
    passwordText.value = 'You must select your password parameters first!';
  }
})

// Runs if slider is adjusted
slider.addEventListener('input', updateSliderValue);
