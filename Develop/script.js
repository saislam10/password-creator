// Assignment Code
var generateBtn = document.querySelector("#generate");

// Instructor Provided Template: Anthony Cooper
function generatePassword() {
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var numbers = "0123456789";
  var special = "#$%&()*+,-./:;<=>?";
  var uppercase = lowercase.toUpperCase();

  var lengthInput = parseInt(prompt("Choose a length between 8 and 128"));

  var lowercaseInput = prompt("Would you like to have lowercase letters"); 
  lowercaseInput = lowercaseInput.toLowerCase()[0];

  var numbersInput =  prompt("Would you like to have numbers");
  numbersInput = numbersInput.toLowerCase()[0]; 

  var specialInput = prompt("Would you like to have special characters")
  specialInput = specialInput.toLowerCase()[0]; 

  var uppercaseInput =  prompt("Would you like to have uppercase letters");
  uppercaseInput = uppercaseInput.toLowerCase()[0];

  password = ""
  userChoice = ""

  if (lengthInput >= 8 && lengthInput <= 128) {
    if (lowercaseInput == 'y'){
      userChoice += lowercase; 
      writePassword();
    } else if (lowercaseInput == 'n'){
      return;
    } else {
      alert("Please select a valid choice!");
    }
    if (numbersInput == 'y'){
      userChoice += numbers; 
      writePassword();
    } else if (numbers == 'n'){
      return;
    } else {
      alert("Please select a valid choice!");
    }
    if (specialInput == 'y'){
      userChoice += special; 
      writePassword();
    } else if (specialInput == 'n'){
      return;
    } else {
      alert("Please select a valid choice!");
    }
    if (uppercaseInput == 'y'){
      userChoice += uppercase; 
      writePassword();
    } else if (uppercaseInput == 'n'){
      return;
    } else {
      alert("Please select a valid choice!");
    }
  }
  else {
  alert("Not allowed, please select a password within the given length");
  }

  for (var i=0; i<lengthInput; i++){
    var random = Math.floor(Math.random()*userChoice.length);
    password += userChoice.substring(random, random +1);
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