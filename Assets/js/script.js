// Assignment Code
var generateBtn = document.querySelector("#generate");


function generatePassword() {
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

  var charCount = window.prompt("How many characters do you want for your password?")
  
  if (charCount<8 || charCount>128){
    window.alert ("Password must be between 8 and 128 characters.")
    window.prompt ("How many characters do you want for your password?")
  } if (charCount>8 && charCount<128) {    
    return console.log(charCount)
  }

  //Below are our arrays the PC will use to create the password 
  var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

  var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  var number = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

  var specialChar = ["@", "(", "~", "!", "@", "#", "$", "%", "^", "&", "*", "_", "-", "+", "=", "`", "(", ")", "{", "}", "[", "]", ":", ";", "'", "<", ">", ",", ".", "?", "/", ")"];

  // below are the variable that will be used by the pc to select the radomized characters for the password
  // Math.random (selects a random number between 0 and 1)is being multiplied by the index length of each array and then Math.floor rounds them down to the nearest whole integer
  var aU = Math.floor(Math.random() * alphaUpper.length);

  console.log(aU);

  var aL = Math.floor(Math.random() * alphaLower.length);

  console.log(aL);

  var nB = Math.floor(Math.random() * number.length);

  console.log(nB);

  var sC = Math.floor(Math.random() * specialChar.length);

  console.log(sC);


  // below our my if and else if conditionals which will help the pc understand which arrays to pull characters from based on user input

  if (answer1 === true &&
    answer2 === true &&
    answer3 === true &&
    answer4 === true
  ) {

    var pool1 = alphaUpper.concat(alphaLower, number, specialChar)
    

  } else if (answer1 === false &&
    answer2 === true &&
    answer3 === true &&
    answer4 === true
  ) {

    var pool2 = alphaLower.concat(number, specialChar)

  } else if (answer1 === true &&
    answer2 === false &&
    answer3 === true &&
    answer4 === true
  ) {

    var pool3 = alphaUpper.concat(number, specialChar)

  } else if (answer1 === true &&
    answer2 === true &&
    answer3 === false &&
    answer4 === true
  ) {

    var pool4 = alphaUpper.concat(alphaLower, specialChar)

  } else if (answer1 === true &&
    answer2 === true &&
    answer3 === true &&
    answer4 === false
  ) {

    var pool5 = alphaUpper.concat(alphaLower, number)

  } else if (answer1 === false &&
    answer2 === false &&
    answer3 === true &&
    answer4 === true
  ) {

    var pool6 = number.concat(specialChar)

  } else if (answer1 === false &&
    answer2 === true &&
    answer3 === false &&
    answer4 === true
  ) {

    var pool7 = alphaLower.concat(specialChar)

  } else if (answer1 === false &&
    answer2 === true &&
    answer3 === true &&
    answer4 === false
  ) {

    var pool8 = alphaLower.concat(number)

  } else if (answer1 === true &&
    answer2 === false &&
    answer3 === false &&
    answer4 === true
  ) {

    var pool9 = alphaUpper.concat(specialChar)

  } else if (answer1 === true &&
    answer2 === false &&
    answer3 === true &&
    answer4 === false
  ) {

    var pool10 = alphaUpper.concat(number)

  } else if (answer1 === true &&
    answer2 === true &&
    answer3 === false &&
    answer4 === false
  ) {

    var pool11 = alphaUpper.concat(alphaLower)

  } else if (answer1 === true &&
    answer2 === false &&
    answer3 === false &&
    answer4 === false
  ) {

    

  } else if (answer1 === false &&
    answer2 === true &&
    answer3 === false &&
    answer4 === false
  ) {



  } else if (answer1 === false &&
    answer2 === false &&
    answer3 === true &&
    answer4 === false
  ) {



  } else if (answer1 === false &&
    answer2 === false &&
    answer3 === false &&
    answer4 === true
  ) {
  } else {



  }
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
