// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword (){


}


// will ganarate password right after prompt

function getPrompts() {

  characterLenght = parseInt;prompt ('how many characters you want your password to be'('10 - 128'));




  if (isNaN(characterLenght) || characterLenght < 8 || characterLenght > 128) {

    alert('character has to be a number,8 - 128 digits. try again please.');
  }

  if (confirm('you need lower case letters in your password?')){
choiceArr = choiceArr.concat(lowerCaseArr);
}
if (confirm('you need upper case letters in your password?')){
choiceArr = choiceArr.concat(upperCaseArr);
}
if (confirm('you need special characters letters in your password?')){
choiceArr = choiceArr.concat(specialCharArr);
}
if (confirm('you need lower case letters in your password?')){
choiceArr = choiceArr.concat(numArr);
}
return true;

}

// possible variables
var characterLenght = 8;
var choiceArr = {};


//create password variables list

var uperCaseArr = ['A', '', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerCaseArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var specialCharArr = ['!', '@', '#', '$', '%', '^', '&', '*', '-', '+', '='];
var numArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']