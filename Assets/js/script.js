// Assignment Code
var generateBtn = document.querySelector("#generate");




function generatePassword(){
  // Below are confirm request that establish what types of characters the user wants in their password
// We also have a prompt that requests input for character length
// all responses are logged to the console
  var answer1 = window.confirm("Do you want uppercase letters?");
  
  console.log(answer1);

  var answer2 = window.confirm("Do you want lowercase letters?");

  console.log(answer2);

  var answer3 = window.confirm("Do you want numbers?");
  
  console.log(answer3);
  
  var answer4 = window.confirm("Do you want special characters?");
  
  console.log(answer4);
  
  var charCount = window.prompt("How many characters do you need for your password?")
  
  console.log(charCount);
  

}

generatePassword();


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
