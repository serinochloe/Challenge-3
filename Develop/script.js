// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

// Assignment Code
var generateBtn = document.querySelector("#generate");


// // Write password to the #password input
var passwordText = document.querySelector("#password");
passwordText.value = password;

var characterOptions = [ "uppercase letters", "lowercase letters", "numbers", "special characters"];

// function askLength() {
//   var length = prompt("Length? (Must be greater than 8 and less than 128 ");
//   if (length>=8 && length<=128) { 
//   } else {alert("Error:value must be between 8 and 128")};
//   };

function generatePassword() {
  // askLength
  var length = prompt("Length? (Must be greater than 8 and less than 128 ");
  if (length>=8 && length<=128) { 
  console.log (length);
  } else {
    alert("Error:value must be between 8 and 128");
   return false;
  };
  // askCharacters
  var allCharacters = prompt("Include all character types? (Please type y or n)");
  if (allCharacters=== "y") {
    console.log (length);
    console.log(allCharacters);
  } else for (let i=0; i < characterOptions.length; i++) {
    console.log (allCharacters);
    prompt("Include " + characterOptions[i] + "? Please type y or n");
  console.log(characterOptions[i]);
  }
};

  


// function askCharacters () {
//   var allCharacters = prompt("Include all character types? (Please type y or n)");
//   console.log(allCharacters);
//   if (allCharacters=== "y") {generatePassword();
//   } else for (let i=0; i < characterOptions.length; i++) {prompt("Include " + characterOptions[i] + "? Please type y or n");
// };
// };

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);
