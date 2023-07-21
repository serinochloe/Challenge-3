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
var passwordText = document.querySelector("#password");
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var number = "0123456789";
var symbol = "!@#$%^&*()"
var allChars =upperCase + lowerCase + number + symbol;


// // Write password to the #password input

function askLength () {
length = prompt("Length? (Must be greater than 8 and less than 128 ");
if (length>=8 && length<=128) { 
} else {
alert("Error:value must be between 8 and 128");
return false;
};
};

function askCharacters() {
allCharacters = prompt("Include all character types? (Please type y or n)");
if (allCharacters=== "y") {
  } else if (allCharacters === "n") { 
    askSpecifics();
  } else if (allCharacters !== "y" || "n") {
    alert("Error:value must be y or n");
    return false};
  };
function askSpecifics() {
  upperSelection = prompt("Include uppercase letters? Please type y or n");
  lowerSelection = prompt("Include lowercase letters? Please type y or n");
  numberSelection = prompt("Include numbers? Please type y or n");
  symbolSelection = prompt("Include special characters? Please type y or n");
};

function writePassword() {
  let password ="";
  if (allCharacters === "y") {
  // password += upperCase[Math.floor(Math.random() * upperCase.length)];
  // password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  // password += number[Math.floor(Math.random() * number.length)];
  // password += symbol[Math.floor(Math.random() * symbol.length)];
  while (length > password.length){
    password += allChars [Math.floor(Math.random() * allChars.length)];
    passwordText.value = password};
  } else if (allCharacters === "n") {
  if (upperSelection === "y") {
    var uppers= password += upperCase[Math.floor(Math.random() * upperCase.length)]; 
    } else if (upperSelection === "n") {};
  if (lowerSelection === "y"){ 
    var lowers = password += lowerCase[Math.floor(Math.random() * lowerCase.length)]; 
    } else if (lowerSelection === "n") {};
  if (numberSelection === "y"){ 
    var nums = password += number[Math.floor(Math.random() * number.length)]; 
    } else if (numberSelection === "n") {};
  if (symbolSelection === "y"){ 
    var symbs = password += symbol[Math.floor(Math.random() * symbol.length)]; 
    }  else if (symbol === "n") {};
  while (length > password.length){
    chars = (uppers + lowers + nums + symbs) 
    password += uppers[Math.floor(Math.random() * uppers.length)];
    password += lowers[Math.floor(Math.random() * lowers.length)];
    password += nums[Math.floor(Math.random() * nums.length)];
    password += symbs[Math.floor(Math.random() * symbs.length)];
    passwordText.value = password};
  };
};


  
// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);


function generatePassword() {
  askLength();
  askCharacters();
  writePassword();
};