// Assignment Code
var generateBtn = document.querySelector("#generate");

// Instructor Provided Template: Anthony Cooper
function generatePassword() {
  //original variables for code
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var numbers = "0123456789";
  var special = "#$%&()*+,-./:;<=>?";
  var uppercase = lowercase.toUpperCase();

  //specific variable for the first input that deals with length of the password
  var lengthInput = parseInt(prompt("Choose a length between 8 and 128"));

  //checks the length of the password, sends code to the very top if user
  //does not choose within length
  if (lengthInput >= 8 && lengthInput <= 128) {
    console.log(lengthInput);
  } else {
    alert("Not allowed, please select a password within the given length");
    generatePassword();
  }

  //specific variables which will eventually manipulate the original variables
  //set up with confirms because that was easier than prompt
  var lowercaseInput = confirm("Would you like to have lowercase letters");
  console.log(lowercaseInput);
  var numbersInput = confirm("Would you like to have numbers");
  console.log(numbersInput);
  var specialInput = confirm("Would you like to have special characters");
  console.log(specialInput);
  var uppercaseInput = confirm("Would you like to have uppercase letters");
  console.log(uppercaseInput);

  //empty strings which we will eventually add to 
  var password = '';
  var userChoice = '';

  //first case which checks if the user has clicked ok on atleast one of the password categories
  if (lowercaseInput == false && numbersInput == false && specialInput == false && uppercaseInput == false) {
    alert("You must select one criteria");
  }
  //if user has chosen, then do
  if (lowercaseInput == true) {
    userChoice += lowercase;
  }
  if (numbersInput == true) {
    userChoice += numbers;
  }
  if (specialInput == true) {
    userChoice += special;
  }
  if (uppercaseInput == true) {
    userChoice += uppercase;
  }
  
  //the password generator, does it at the very end after accumulating user entries
  for (var i = 0; i < lengthInput; i++) {
    var randomPass = Math.floor(Math.random() * userChoice.length);
    password += userChoice.substring(randomPass, randomPass + 1);
  }
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);