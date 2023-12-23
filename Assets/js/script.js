// Assignment Code
var generateBtn = document.querySelector("#generate");


function generatePassword() {

  var charCount = window.prompt("How many characters do you want for your password?")

  if (charCount < 8 || charCount > 128) {
    window.alert("Password must be between 8 and 128 characters. Please try again.")
    // window.prompt("How many characters do you want for your password?")
  } 
  
  if (charCount > 8 && charCount < 128) {
    console.log(charCount)
  }

  var newPass = [];

  var answer1 = window.confirm("Do you want uppercase letters?");

  console.log(answer1);

  var answer2 = window.confirm("Do you want lowercase letters?");

  console.log(answer2);

  var answer3 = window.confirm("Do you want numbers?");

  console.log(answer3);

  var answer4 = window.confirm("Do you want special characters?");

  console.log(answer4);


  var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

  var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  var number = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

  var specialChar = ["@", "(", "~", "!", "@", "#", "$", "%", "^", "&", "*", "_", "-", "+", "=", "`", "(", ")", "{", "}", "[", "]", ":", ";", "'", "<", ">", ",", ".", "?", "/", ")"];

  var charCombine = []


  if (answer1 === true) {

    var aU = Math.floor(Math.random() * alphaUpper.length);

    console.log(alphaUpper[aU]);
    newPass.push(alphaUpper[aU])
    charCombine = charCombine.concat(alphaUpper)
  }


  if (answer2 === true) {
    var aL = Math.floor(Math.random() * alphaLower.length);

    console.log(alphaLower[aL]);
    newPass.push(alphaLower[aL])
    charCombine = charCombine.concat(alphaLower)
  }
  if (answer3 === true) {
    var nB = Math.floor(Math.random() * number.length);

    console.log(number[nB]);
    newPass.push(number[nB])
    charCombine = charCombine.concat(number)
  }
  if (answer4 === true) {

    var sC = Math.floor(Math.random() * specialChar.length);
    newPass.push(specialChar[sC])
    console.log(specialChar[sC]);
    charCombine = charCombine.concat(specialChar)

  }
  if (answer1 === false && answer2 === false && answer3 === false && answer4 === false) {
    window.alert("You must select at least one character type to continue. Please try again.")
  }
  console.log(charCombine);
  for (var i = newPass.length; i < charCount; i++) {
    newPass.push(charCombine[Math.floor(Math.random() * charCombine.length)])
    console.log(i);

  }


  console.log(newPass);

  return newPass.join("")
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
