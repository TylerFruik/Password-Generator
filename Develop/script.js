// * VARIABLES
var generateBtn = document.getElementById('generate');
const buttons = document.querySelectorAll('.parameter-button');

// * FUNCTIONS
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
// Parameter buttons
buttons.forEach(button => {
  button.addEventListener('click', () => {
      button.classList.toggle('selected');
  });
});

// ! Generate Password button
// if (generateBtn.disabled == true) {
//   generateBtn.addEventListener("click", writePassword);
//   console.log('true')
// } else if (generateBtn.disabled == false) {
//   console.log('false')
// }

// MAIN

// TODO
// • Generate Password button togglegit 