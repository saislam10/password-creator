// Assignment Code
var generateBtn = document.querySelector("#generate");

// Instructor Provided Template: Anthony Cooper
function generatePassword() {
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var numbers = "0123456789";
  var special = "#$%&()*+,-./:;<=>?";
  var uppercase = lowercase.toUpperCase();

  var lengthInput = parseInt(prompt("Choose a length between 8 and 128"));

  var lowercaseInput = prompt("Would you like to have lowercase letters: Yes or No?"); 
  lowercaseInput = lowercaseInput.toLowerCase()[0];

  var numbersInput =  prompt("Would you like to have numbers: Yes or No?");
  numbersInput = numbersInput.toLowerCase()[0]; 

  var specialInput = prompt("Would you like to have special characters: Yes or No?")
  specialInput = specialInput.toLowerCase()[0]; 

  var uppercaseInput =  prompt("Would you like to have uppercase letters? Yes or No?");
  uppercaseInput = uppercaseInput.toLowerCase()[0];

  password = ""
  userChoice = ""

  if (lengthInput >= 8 && lengthInput <= 128) {
    if (lowercaseInput == 'y'){
      lowercase += userChoice 
    }
    else if (lowercaseInput == 'n'){

    }
    else {
      alert ("Please enter a valid response!")

    }
    if (numbersInput == 'y'){
      numbers += userChoice 
    }
    else if (numbersInput == 'n'){

    }
    else {
      alert ("Please enter a valid response!")

    }
    if (specialInput == 'y'){
      special += userChoice 
    }
    else if (specialInput == 'n'){

    }
    else {
      alert ("Please enter a valid response!")

    }
    if (uppercaseInput == 'y'){
      uppercase += userChoice 
    }
    else if (uppercaseInput == 'n'){

    }
    else {
      alert ("Please enter a valid response!")

    }

   }

    else {
    alert("NOT COOL");
  }

  return "";
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);