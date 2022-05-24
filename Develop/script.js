// Assignment Code
var generateBtn = document.querySelector("#generate");

// Instructor Provided Template: Anthony Cooper
function generatePassword() {
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var numbers = "0123456789";
  var special = "#$%&()*+,-./:;<=>?";
  var uppercase = lowercase.toUpperCase();

  var lengthInput = parseInt(prompt("Choose a length between 8 and 128"));

  if (lengthInput >= 8 && lengthInput <= 128) {
    console.log(lengthInput.length);
  } else {
  alert("Not allowed, please select a password within the given length");
    generatePassword();
  }

  var lowercaseInput = confirm("Would you like to have lowercase letters"); 
  var numbersInput =  confirm("Would you like to have numbers");
  var specialInput = confirm("Would you like to have special characters")
  var uppercaseInput = confirm("Would you like to have uppercase letters");
  

  password = ' ';
  userChoice = ' ';



  if(!lowercaseInput && !numbersInput && !specialInput && !uppercaseInput ){
    alert("You must select one criteria")
    writePassword();
  }

  if (lowercaseInput) {
    userChoice += lowercase;
  }    
  if (numbersInput) {
    userChoice += numbers;
  }   
  if (specialInput) {
    userChoice += special;
  }   
  if (uppercaseInput) {
    userChoice += uppercase;
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