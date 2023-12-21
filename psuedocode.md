GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page

// // Alert
// window.alert("Hello world!");
​
// // Confirm
// var answer = window.confirm("Do you like pizza?")
// console.log(answer);
// alert(answer)
​
// var obviously = window.prompt("Are you ready for Winter Break?")
​
// console.log(obviously);
​
console.log(
    Math.floor(Math.random() * 11)
    );
​
// User Choice
var userChoice = prompt("Choose R, P, or S");
​
console.log(userChoice);